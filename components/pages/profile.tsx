/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import LevelBar from "@components/levels/LevelBar";
import { levels } from "@constants/levels";
import { addXP } from "@services/levels.service";

export default function Profile(props: { session: any }) {
  const { profilePicture, username, description, level, id } = props.session.data.user;
  const { update } = props.session


    function addTest () {
        addXP(id, 10000).then((user) => {
            update({
                ...props.session,
                data: {
                    ...props.session.data,
                    user
                }
            })
        })
    }

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
            </div>

          
          <LevelBar user={props.session.data.user} />
          <button onClick={addTest}>add xp</button>
          
        </div>

        <div className="mt-4 w-3/4 h-1/6 flex items-start justify-center py-2 break-words">
          <p className="text-lg text-wave-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
