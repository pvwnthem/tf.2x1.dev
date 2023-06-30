"use client";
import React from "react";
import AuthError from "./errors/AuthError";
import EmailError from "./errors/EmailError";

export interface props {
    children: any;
    session: any;
}

export default function EmailProtected(props: props) {
    return (
        <>
            {props.session.data.user.verified && (
                <div>{props.children}</div>
            )}
            {props.session.status != "loading" &&
                !props.session.data.user.verified && <EmailError />}
        </>
    );
}