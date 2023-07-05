/* eslint-disable @next/next/no-img-element */
'use client'
import { levels } from '@constants/levels'
import React from 'react'

export default function NameBadge(props: { session: any }) {
    const { level } = props.session.data.user

    return <img alt="badge" className="h-12 ml-2" src={levels[level].badge} />
}
