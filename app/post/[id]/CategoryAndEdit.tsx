import { FormattedPost } from "@/app/types";
import { Editor } from "@tiptap/react";
import React from "react";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
type Props = {
  isEditable: boolean;
  handleIsEditable: (isEditable: boolean) => void;
  title?: string;
  setTitle: (title: string) => void;
  tempTitle?: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent?: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
  post: FormattedPost | null;
};
export default function CategoryAndEdit({
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
  post,
}: Props) {
  const handleEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTempTitle(title || ""); // Provide a default empty string if title is undefined
    setTempContent(editor?.getHTML() || "");
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle || "");
    editor?.commands.setContent(tempContent || "");
  };
  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post?.category}
      </h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button
              onClick={handleCancelEdit}
            >
              <AiOutlineClose className="text-2xl text-accent-red" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleEnableEdit}
          >
            <AiFillEdit className="text-2xl text-accent-red " />
          </button>
        )}
      </div>
    </div>
  );
}
