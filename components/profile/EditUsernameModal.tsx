import React, { useState } from "react";

const EditUsernameModal = ({
    onSave,
    onClose,
}: {
    onSave: any;
    onClose: any;
}) => {
    const [newUsername, setNewUsername] = useState("");

    const handleChange = (e: any) => {
        setNewUsername(e.target.value);
    };

    const handleSave = () => {
        onSave(newUsername);
        onClose();
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
