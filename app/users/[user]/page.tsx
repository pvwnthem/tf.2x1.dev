"use client";
import React, { useState, useEffect } from "react";

import { IUser } from "@models/User";
import { getUserByName } from "@services/users.service";
import Loading from "@components/pages/loading";
import { useSession } from "next-auth/react";
import UserNotFound from "@components/auth/errors/UserNotFound";
import UserProfile from "@components/pages/userProfile";
import BackButton from "@components/navigation/back";

export default function UserPage({ params }: any) {
    const [user, setUser] = useState<IUser | null>(null);
    const [userNotFound, setUserNotFound] = useState(false);
    const session = useSession();

    useEffect(() => {
        async function getData() {
            if (params.user) {
                const user = await getUserByName(params.user as string);

                if (user) {
                    setUser(user as IUser);
                } else {
                    setUserNotFound(true);
                }
            }
        }

        getData();
    }, [params.user]);

    if (userNotFound) {
        return <UserNotFound />;
    }

    return (
        <>
            {user ? (
                <>
                    <BackButton />
                    <UserProfile user={user} />
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}
