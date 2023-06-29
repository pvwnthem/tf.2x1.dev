/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import LevelBar from "@components/levels/LevelBar";
import { levels } from "@constants/levels";
import EditButton from "@components/profile/EditButton";

export default function Profile(props: { session: any; user?: any }) {
    const user = props.user ? props.user : props.session.data.user;
    const { profilePicture, username, description, id, role } = user;

    const [canEdit, setCanEdit] = React.useState(false);

    React.useEffect(() => {
        if (props.user && props.user.id === props.session.data.user.id) {
            console.log("1");
            setCanEdit(true);
        }

        if ((props.user && role === "admin") || role === "owner") {
            console.log("2");
            setCanEdit(true);
        }

        if (!props.user && id) {
            console.log("3");
            setCanEdit(true);
        }
    }, [id, props.session.data.user.id, props.user, role]);

    return (
        <div className="bg-background h-screen flex items-center justify-center py-8">
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-start">
                <div className="md:mt-16 mt-12 w-full flex flex-col items-center justify-center">
                    <div className="rounded-full w-1/4 flex items-center justify-center p-2">
                        <img
                            alt="Profile Picture"
                            src={profilePicture}
                            className="w-full"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <h1 className="text-4xl py-4 md:text-5xl text-wave-300">
                            {username}
                        </h1>
                        {canEdit && (
                            <EditButton target="username" user={user} />
                        )}
                    </div>

                    <LevelBar user={user} />
                </div>

                <div className="mt-4 w-3/4 h-1/6 flex items-start justify-center py-2 break-words">
                    <p className="text-lg text-wave-300">{description}</p>
                </div>
            </div>
        </div>
    );
}
