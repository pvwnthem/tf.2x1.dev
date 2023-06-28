'use client'
import React from "react"
import { levels } from "@constants/levels"

export default function LevelBar ( props : { session : any } ) {

    const { level, xp } = props.session.data.user


    return (
        <>
            <div className="flex flex-col items-center justify-center w-1/2">
                <img className="" src={levels[level].badge}></img>
                <h2 className="text-center mt-2 text-wave-200">{xp} xp</h2>
            </div>
        </>
    )

}