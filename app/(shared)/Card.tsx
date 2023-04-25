import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "@prisma/client";
type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  post: Post;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
  post,
}: Props) => {
  const { id, title, author, createdAt, image, snippet } = post || {};
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <div className={className}>
      <Link
        className="basis-full hover:opacity-70"
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      >
        <div className={`relative w-auto mb-3 ${imageHeight}`}>
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="tech"
          src={image}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />  
        </div>
      </Link>
      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            {title}
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>
        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          asperiores magni, tenetur maxime aliquam suscipit debitis odit
          consectetur commodi, at totam velit? Dignissimos quasi qui incidunt
          ea, ipsum recusandae nemo, architecto illo deserunt expedita quod,
          necessitatibus nesciunt hic perferendis cupiditate voluptatem fugiat
          ad? Excepturi porro error laboriosam consequatur sunt temporibus!
        </p>
      </div>
    </div>
  );
};

export default Card;
