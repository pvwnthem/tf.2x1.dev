import React, { useState, useEffect } from "react";
import Image from "next/image";
import LevelBar from "@components/levels/LevelBar";
import { levels } from "@constants/levels";
import { addXP } from "@services/levels.service";
import { updateUser } from "@services/users.service";
import Description from "@components/profile/Description";
import EditingButton from "@components/profile/editing/EditingButton";
import EditDescription from "@components/profile/editing/EditDescription";

const validateData = (data: any) => {
  const errors = [];

  if (data.username.length < 4) {
    errors.push({
      error: "username must be at least 4 characters long",
    });
  } else if (data.username.length > 16) {
    errors.push({
      error: "username should be less than 16 characters long",
    });
  }

  if (data.description.length === 0) {
    errors.push({
      error: "Description must be atleast 1 character long"
    })
  }
  if (data.description.length > 128) {
    errors.push({
      error: "Description can't be longer than 128 characters"
    })
  }

  return errors;
};

export default function Profile(props: { session: any }) {
  const { profilePicture, username, description, level, id } = props.session.data.user;
  const { update } = props.session;

  const [editing, setEditing] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [validationErrors, setValidationErrors] = useState<any>([]);

  useEffect(() => {
    // Load the user data from localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUpdatedUsername(parsedUser.username.toLowerCase());
      setUpdatedDescription(parsedUser.description);
    }
  }, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUsername(event.target.value.toLowerCase());
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedDescription(event.target.value);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    const updatedUser = {
      ...props.session.data.user,
      username: updatedUsername,
      description: updatedDescription,
    };

    const validationErrors = validateData(updatedUser);

    if (validationErrors.length > 0) {
      setValidationErrors(validationErrors);
      return;
    }

    try {
      const response = await updateUser(id, updatedUser);

      localStorage.setItem("user", JSON.stringify(response));

      update({
        ...props.session,
        data: {
          ...props.session.data,
          user: response,
        },
      });

      setEditing(false);
    } catch (error) {
      console.log("Error updating user:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="bg-background h-screen flex items-center justify-center py-8">
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-start">
        <div className="md:mt-16 mt-12 w-full flex flex-col items-center justify-center">
          <div className="rounded-full w-1/4 flex items-center justify-center p-2">
            <img alt="Profile Picture" src={profilePicture} className="w-full" />
          </div>

          {editing ? (
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={updatedUsername}
                onChange={handleUsernameChange}
                className="text-4xl py-4 md:text-5xl text-center text-wave-300 bg-background"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <h1 className="text-4xl py-4 md:text-5xl text-wave-300">{updatedUsername}</h1>
            </div>
          )}

          <LevelBar user={props.session.data.user} />
        </div>

        <div className="mt-4 w-3/4 h-1/6 flex items-start justify-center py-2 break-words">
          {editing ? (
            <EditDescription description={updatedDescription} handleDescriptionChange={handleDescriptionChange} />
          ) : (
            <Description description={updatedDescription} />
          )}
        </div>

        {validationErrors.length > 0 && (
          <div className="text-red-500">
            {validationErrors.map((error: any, index: number) => (
              <p key={index}>{error.error}</p>
            ))}
          </div>
        )}

        <EditingButton isEditing={editing} handleSave={handleSave} handleEdit={handleEdit} />
      </div>
    </div>
  );
}
