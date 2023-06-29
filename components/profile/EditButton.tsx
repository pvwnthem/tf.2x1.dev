"use client";
import React from "react";
import EditUsernameModal from "./EditUsernameModal";
import { setUsername } from "@services/users.service";

export default function EditButton(props: { target: string; user: any }) {
    const user = props.user;
    const [modal, setModal] = React.useState<boolean>(false);

    return (
        <>
            <svg
                onClick={() => {
                    setModal(!modal);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="hover:cursor-pointer w-6 h-6 ml-1 text-wave-300"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
            </svg>

            {modal && props.target === "username" && (
                <EditUsernameModal
                    onClose={() => {
                        setModal(false);
                    }}
                    onSave={(name: string) => setUsername(user.id, name)}
                />
            )}
        </>
    );
}
