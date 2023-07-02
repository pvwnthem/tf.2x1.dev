"use client";
import { sendVerificationRequest } from "@services/email.service";
import { getToken } from "@services/users.service";
import React, { useState } from "react";

export default function EmailError( { email, url, id } : { email : string, url: string, id: string } ) {

    const [sent, setSent] = useState<boolean>(false)

    async function resend() {
        setSent(true)
        await sendVerificationRequest({ identifier: email, token: await getToken(id), baseUrl: url });
    }

    return (
        <div className="w-full h-screen flex items-start justify-center bg-background">
            <div className="w-1/2 flex flex-col">
                <h1 className="text-wave-300 text-center text-7xl mt-48">
                    oops!
                </h1>
                <h2 className="text-wave-400 text-center text-3xl mt-12">
                    Please verify your email to access this page! Check your email and click on the link to do so
                </h2>
                { sent ? (
                    <h1 className="text-wave-300 text-3xl mt-8">
                        Thanks! We sent the email
                    </h1>
                ) : (
                    <button
                        className="bg-wave-400 px-8 py-2 text-lg mx-auto rounded-lg mt-8"
                        onClick={() => resend()}
                    >
                        Resend Email
                    </button>
                ) }
                
            </div>
        </div>
    );
}