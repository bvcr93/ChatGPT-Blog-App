import { prisma } from "@/app/api/hello/client";
import React from "react";
import Sidebar from "@/app/(shared)/Sidebar";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "@/app/types";
import Content from "./Content";
interface PostDetailsProps {
  params: {
    id: string;
  };
}

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({ where: { id } });
  if (!post) {
    console.log("no post found with that id");
    return null;
  }
  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  };

  return formattedPost;
};

export default async function PostDetails({ params }: PostDetailsProps) {
  const { id } = params;

  const post: FormattedPost | null = await getPost(id);
  console.log(post)
  return (
    <main className="px-10 leading-7 maincol">
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <div className="hidden md:block ">
            <Content />
           id: {id}
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
