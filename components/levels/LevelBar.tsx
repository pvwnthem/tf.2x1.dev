'use client'
import React, { useEffect } from "react"
import { levels } from "@constants/levels"
import { addXP } from "@services/levels.service"
import { connect } from "@lib/mongodb";


export default function LevelBar ( props : { session : any } ) {
    
    const { level, xp, id } = props.session.data.user

    return (
        <>
            <div className="flex flex-col items-center justify-center w-1/2">
                <img className="md:w-1/5 w-1/4" src={levels[level].badge}></img>
                <h2 className="text-center mt-2 text-wave-200">{xp} xp / {levels[level + 1].xpRequired} xp</h2>
            </div>
        </>
    )

}

