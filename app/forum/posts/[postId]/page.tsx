'use client'
import UserNotFound from "@components/auth/errors/UserNotFound";
import { getPost } from "@services/forum.service";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react"

export default function PostPage ( { params } : any ) {

    const [post, setPost] = useState<any>(null)
    const [notFound, setNotFound] = useState<boolean>(false)
    const session = useSession();

    useEffect(() => {
        async function getData() {
            if (params.postId) {
                const post = await getPost(params.postId);
                console.log(post, params.postId)

                if (post) {
                    setPost(post)
                } else {
                    setNotFound(true);
                }
            }
        }

        getData();
    }, [params.user, params.category]);

    if (notFound) {
        return <UserNotFound />;
    }

    return (
        <>
            <div></div>
        </>
    )
}