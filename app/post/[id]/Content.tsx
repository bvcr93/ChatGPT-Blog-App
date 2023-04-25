"use client";

import { FormattedPost } from "@/app/types";
import React, { useState } from "react";
import Image from "next/image";
import SocialLinks from "@/app/(shared)/SocialLinks";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorMenuBar } from "./EditorMenuBar";
import { Editor } from "@tiptap/react";
import CategoryAndEdit from "./CategoryAndEdit";
import Article from "./Article";

interface ContentProps {
  post: FormattedPost | null;
}

export default function Content({ post }: ContentProps) {
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState(post?.title);
  const [titleError, setTitleError] = useState("");
  const [content, setContent] = useState(post?.content);
  const [contentError, setContentError] = useState("");
  const [tempTitle, setTempTitle] = useState(title);
  const [tempContent, setTempContent] = useState(content);
  const [temporaryContent, setTemporaryContent] = useState(content);

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool);
  };
  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm xl:prose-xl leading-8 focus:outline-none w-full max-w-full",
      },
    },
    content: content,
    editable: isEditable,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation checks
    if (title === "") setTitleError("This field is required.");
    if (editor?.isEmpty) setContentError("This field is required.");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content);
    editor?.commands.setContent(data.content);
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
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
      <CategoryAndEdit
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />
      <form onSubmit={handleSubmit}>
        {/* HEADER */}

        <>
          {isEditable ? (
            <div>
              <textarea
                onChange={handleOnChangeTitle}
                placeholder="title"
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                value={title}
              ></textarea>
              {titleError && <p className="mt-1 ">{titleError}</p>}
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
        <Article
          editor={editor}
          isEditable={isEditable}
          contentError={contentError}
          setContent={setContent}
          title={title}
        />

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
