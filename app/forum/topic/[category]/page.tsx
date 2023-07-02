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
import { Navbar } from "@components/navigation/navbar";
import { categories } from "@constants/categories";
import CategoryBox from "@components/forum/CategoryBox";
import Plus from "@components/svg/plus";
import Wrapper from "@components/auth/Wrapper";
import EmailProtected from "@components/auth/emailProtected";
import Protected from "@components/auth/protected";

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
        <Wrapper session={session}>
            <Protected session={session}>
                <EmailProtected session={session} >
            <>
                <Navbar overlapsNot={true} />
                <div className="w-full h-screen bg-background flex flex-col px-2 py-2 items-center">
                    <div className="max-w-7xl w-full md:mt-12">
                        <CategoryBox name={categories[params.category].title} description={categories[params.category].description} />
                    </div>

                    <div className="max-w-7xl w-full mt-6 flex md:justify-end justify-center">
                    <button onClick={() => { window.location.replace(`/forum/new?category=${params.category}`) }} className="bg-wave-500 hover:bg-wave-400 px-8 py-4 rounded text-white flex whitespace-nowrap">
                        <span className="text-xl">new post</span>
                        <span className="flex items-center justify-center w-6">
                            <Plus />
                        </span>
                    </button>

                    </div>

                    <div className="max-w-7xl w-full mt-6">
                    {posts ? (
                <>
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
                    </div>

                </div>
            </>
                </EmailProtected>
            </Protected>
        </Wrapper>
        
            {/*
            {posts ? (
                <>
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
            */}
            
        </>
    );
}
