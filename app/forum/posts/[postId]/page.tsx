'use client'
import UserNotFound from "@components/auth/errors/UserNotFound";
import Badge from "@components/levels/Badge";
import DeletedBadge from "@components/levels/DeletedBadge";
import { Navbar } from "@components/navigation/navbar";
import Loading from "@components/pages/loading";
import { deletedUserPfp } from "@constants/images";
import { getPost } from "@services/forum.service";
import { getUser } from "@services/users.service";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function PostPage({ params }: any) {
  const [post, setPost] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [postLoading, setPostLoading] = useState<boolean>(true);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const session = useSession();

  useEffect(() => {
    async function getData() {
      if (params.postId) {
        setPostLoading(true);
        setUserLoading(true);

        const post = await getPost(params.postId);
        console.log(post, params.postId);

        if (post) {
          setPost(post);
          const user = await getUser(post.author);
          setUser(user);
          setUserLoading(false);
        } else {
          setNotFound(true);
        }

        setPostLoading(false);
      }
    }

    getData();
  }, [params.postId, params.category]);

  const handleReply = () => {
  };

  const handleLike = () => {
  };

  if (notFound) {
    return <UserNotFound />;
  }

  if (postLoading || userLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar overlapsNot={true} />
      <div className="w-full min-h-screen md:px-16 bg-background flex flex-col items-center">
        <div className="w-full border flex p-8">
          <div className="w-1/5 flex flex-col border rounded p-8 items-center justify-center">
            <img
              src={user ? user.profilePicture : deletedUserPfp}
              alt="Profile Picture"
              className="w-1/2 px-2 mt-4"
            />
            <h1 className="text-wave-400 text-3xl mt-4">
              {user ? user.username : "deleted user"}
            </h1>
            <h1 className="mt-1 text-sm text-wave-200">
              created{" "}
              {user
                ? new Date(user.createdAt).toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })
                : "00/00/0000"}{" "}
              at{" "}
              {user
                ? new Date(user.createdAt).toLocaleTimeString("en-US")
                : "00:00:00"}
            </h1>
            <div className="mt-2 flex flex-col items-center justify-center">
              {user ? <Badge user={user} /> : <DeletedBadge />}
            </div>
          </div>

          <div className="px-12">
            <h1 className="text-wave-300 text-3xl">{post.title}</h1>
            <p className="text-wave-400 mt-8">{post.content}</p>
          </div>
        </div>

        <div className="flex justify-between w-full mt-8">
          <button
            onClick={handleReply}
            className="bg-wave-200 hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded"
          >
            Reply
          </button>
          <button
            onClick={handleLike}
            className="bg-wave-400 hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded"
          >
            Like
          </button>
        </div>
      </div>
    </>
  );
}
