import React, { useState } from "react";

const EditUsernameModal = ({
    onSave,
    onClose,
}: {
    onSave: any;
    onClose: any;
}) => {
    const [newUsername, setNewUsername] = useState("");
    const [error, setError] = useState<any>(null)

    const handleChange = (e: any) => {
        setNewUsername(e.target.value);
    };

    const handleSave = () => {
        if (newUsername === "") {
            setError("Please enter a new username")
        } else if (newUsername.length < 4 || newUsername.length > 16) {
            setError("Please enter a new username between 4 characters and 16 characters long")
        }
         else {
            onSave(newUsername);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="absolute border bg-background rounded-lg shadow-lg p-6">
                <h2 className="text-lg text-wave-300 font-bold mb-4">
                    Edit Username
                </h2>
                <input
                    type="text"
                    value={newUsername}
                    onChange={handleChange}
                    className="border rounded-md px-3 py-2 mb-4"
                />
                { error && (
                    <>
                        <h1 className="text-wave-200">{error}</h1>
                    </>
                ) }
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-wave-100 hover:bg-wave-300 text-white font-semibold px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-wave-400 hover:bg-wave-500 text-white font-semibold px-4 py-2 ml-2 rounded"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditUsernameModal;
