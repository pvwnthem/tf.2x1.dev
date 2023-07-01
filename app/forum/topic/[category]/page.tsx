"use client";
import React, { useState, useEffect } from "react";

import { IUser } from "@models/User";
import { getUserByName } from "@services/users.service";
import Loading from "@components/pages/loading";
import { useSession } from "next-auth/react";
import UserNotFound from "@components/auth/errors/UserNotFound";
import UserProfile from "@components/pages/userProfile";
import BackButton from "@components/navigation/back";
import { getAllPostsInCategory} from "@services/forum.service";
import { IForumPost } from "@models/forum/ForumPost";
import Post from "@components/forum/Post";

export default function CategoryPage({ params }: any) {
    const [posts, setPosts] = useState<any>(null)
    const [notFound, setNotFound] = useState<boolean>(false)
    const session = useSession();

    useEffect(() => {
        async function getData() {
            if (params.category) {
                const posts = await getAllPostsInCategory(params.category as string);

                if (posts) {
                    setPosts(posts)
                } else {
                    setNotFound(true);
                }
            }
        }

        getData();
    }, [params.user]);

    if (notFound) {
        return <UserNotFound />;
    }

    return (
        <>
            {posts ? (
                <>
                    <BackButton />
                    { posts.map((post: IForumPost, index: number) => {
                        return (
                            <>
                                <Post post={post} />
                            </>
                        )
                    }) }
                </>
            ) : (
                <Loading />
            )}
        </>
    );
}
