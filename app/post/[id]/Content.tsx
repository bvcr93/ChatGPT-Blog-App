"use client";
import { AiFillEdit } from "react-icons/ai";
import { FormattedPost } from "@/app/types";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorMenuBar } from "./EditorMenuBar";

interface ContentProps {
  post: FormattedPost | null;
}

export default function Content({ post }: ContentProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(post?.title);
  const [titleError, setTitleError] = useState("");
  const [content, setContent] = useState(post?.content);
  const [contentError, setContentError] = useState("");
  const [tempContent, setTempContent] = useState(content);

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  function formatDate(dateString: string | undefined): string {
    if (!dateString) {
      return "";
    }

    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-wh-300 ">{`Home > ${post?.category} > ${post?.title}`}</h5>

      {/* CATEGORY AND EDIT */}
      <div className="flex justify-between items-center">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          {post?.category}
        </h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button
                onClick={() => {
                  handleIsEditable(!isEditable);
                }}
              >
                <AiOutlineClose className="text-2xl text-accent-red" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                handleIsEditable(!isEditable);
              }}
            >
              <AiFillEdit className="text-2xl text-accent-red " />
            </button>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* HEADER */}

        <>
          {isEditable ? (
            <div>
              <textarea
                onChange={() => console.log("change title")}
                placeholder="title"
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                value={title}
              ></textarea>
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs ">by {post?.author}</h5>
            <h6 className="text-wh-300 text-xs">
              {formatDate(post?.createdAt)}
            </h6>
          </div>
        </>
        {/* image */}

        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            alt=""
            fill
            src={post?.image || ""}
            className="object-cover"
          />
        </div>
        <div
          className={
            isEditable
              ? "border-2 rounded-md bg-wh-50 p-3"
              : "w-full max-w-full"
          }
        >
          {isEditable && (
            <>
              <EditorMenuBar editor={editor} />
              <hr className="border-1 mt-2" />
              <EditorContent editor={editor} />
            </>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
}
