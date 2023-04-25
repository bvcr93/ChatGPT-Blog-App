"use client";

import { Editor } from "@tiptap/react";
import { useState } from "react";
import React from "react";
import { EditorMenuBar } from "./EditorMenuBar";
import { EditorContent } from "@tiptap/react";
interface ArticleProps {
  isEditable: boolean;
  editor: Editor | null;
  contentError: string;
  setContent: (content: string) => void;
  title?: string;
}

export default function Article({
  isEditable,
  editor,
  contentError,
  title,
  setContent,
}: ArticleProps) {
  const [role, setRole] = useState<string>("I am a helpful assistant.");
  if (!editor) {
    return null;
  }

  const postAiContent = async () => {
    editor
      .chain()
      .focus()
      .setContent("Generating Ai Content. Please Wait...")
      .run();

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/openai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        role: role,
      }),
    });
    const data = await response.json();

    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  return (
    <article className="text-wh-500 leading-8">
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2" />
         
          </>
        )}
           <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
}
