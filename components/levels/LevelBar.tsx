'use client'
import React from "react"
import { levels } from "@constants/levels"

export default function LevelBar ( props : { session : any } ) {

    const { level, xp } = props.session.data.user


    return (
        <>
        <img src={levels[level].badge}></img>
        </>
    )

}