import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

type Props = {
    isDark?: boolean;
  };

export default function SocialLinks({ isDark = false }: Props) {
  return (
    <div className="flex justify-between items-center gap-7 w-full ">
      <AiFillTwitterCircle className="text-3xl" />
      <BsFacebook className="text-2xl" />
    </div>
  );
}
