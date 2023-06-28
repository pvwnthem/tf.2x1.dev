"use client";
import LevelBar from "@components/levels/LevelBar";
import React from "react";

// TODO : make styling good, styling is just for testing right now
export default function Profile(props: { session: any }) {
    const { profilePicture, username, description } = props.session.data.user;

    return (
        <>
            <div className="bg-background w-full h-screen flex items-center py-8 justify-center">
                <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-start">
                    <div className=" md:mt-16 mt-12 w-full items-center flex flex-col justify-center">
                        <div className="border w-1/4 flex items-center justify-center rounded-full p-2">
                            <img src={profilePicture} className="w-full"></img>
                        </div>
                        <h1 className="md:text-5xl text-4xl text-wave-300 py-4">
                            {username}
                        </h1>
                        <LevelBar session={props.session} />
                    </div>

                    <div className="border mt-4 w-3/4 h-1/6 items-start flex px-2 py-2 break-words justify-center">
                        <p className="text-lg text-wave-300">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
