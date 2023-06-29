/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Badge from "./Badge";

export default function LevelBar(props: { session: any }) {

    return (
        <>
            <div className="flex flex-col items-center justify-center w-1/2">

                <Badge session={props.session} />

            </div>
        </>
    );
}
