'use client'
import React, { useEffect } from "react"
import { levels } from "@constants/levels"
import { addXP } from "@services/levels.service"
import { connect } from "@lib/mongodb";


export default function LevelBar ( props : { session : any } ) {
    
    const { level, xp, id, title } = props.session.data.user
    const { update } = props.session


    function addTest () {
        addXP(id, 1000).then((user) => {
            update({
                ...props.session,
                data: {
                    ...props.session.data,
                    user
                }
            })
            console.log(user, level, xp, id)
        })
    }

    function l () {
        console.log(props.session)
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center w-1/2">
                {/* BEGIN: keeping this part when redoing styling also move it to its own component soon */}
                <img className="" src={levels[level].badge}></img>
                <h1 className="mt-1  text-wave-300">{title}</h1>
                {/* END: keep */}
                <h2 className="text-center mt-1 text-wave-200">{xp} xp / {levels[level + 1].xpRequired} xp</h2>

                <button onClick={addTest}>add 100 xp</button>
                <button onClick={l}>log</button>
            </div>
        </>
    )

}

