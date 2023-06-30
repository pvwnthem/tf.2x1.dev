import React, { useState, useEffect } from "react";
import Image from "next/image";
import LevelBar from "@components/levels/LevelBar";
import { levels } from "@constants/levels";
import { addXP } from "@services/levels.service";
import { updateUser } from "@services/users.service"; // Import the updateUser function
import Description from "@components/profile/Description";
import EditingButton from "@components/profile/EditingButton";

export default function Profile(props: { session: any }) {
  const { profilePicture, username, description, level, id } = props.session.data.user;
  const { update } = props.session;

  const [editing, setEditing] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  useEffect(() => {
    // Load the user data from localStorage on component mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUpdatedUsername(parsedUser.username);
      setUpdatedDescription(parsedUser.description);
    }
  }, []);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUsername(event.target.value);
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
      description: updatedDescription
    };

    try {
      // Call the updateUser function to update the user in the backend
      const response = await updateUser(id, updatedUser);

      // Update the user object in localStorage
      localStorage.setItem("user", JSON.stringify(response));

      // Update the session with the updated user data
      update({
        ...props.session,
        data: {
          ...props.session.data,
          user: response
        }
      });

      setEditing(false);
    } catch (error) {
      console.log("Error updating user:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  /*
  function addTest() {
    addXP(id, 10000).then((user) => {
      update({
        ...props.session,
        data: {
          ...props.session.data,
          user
        }
      });
    });
  }
  */

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
          {/* <button onClick={addTest}>add xp</button> */}
        </div>

        <div className="mt-4 w-3/4 h-1/6 flex items-start justify-center py-2 break-words">
          {editing ? (
            <textarea
              value={updatedDescription}
              onChange={handleDescriptionChange}
              maxLength={128}
              className="mt-4 w-3/4 flex h-auto items-start justify-center py-2 break-keep text-lg text-wave-300 bg-background"
            />
          ) : (
            <Description description={updatedDescription} />
          )}
        </div>

        <EditingButton isEditing={editing} handleSave={handleSave} handleEdit={handleEdit} />
      </div>
    </div>
  );
}
