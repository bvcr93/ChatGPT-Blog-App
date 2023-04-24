import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
}: Props) => {
  const options = { year: "numeric", month: "long", day: "numeric" } as any;

  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" href="/">
        <div className={`relative w-auto mb-3 ${imageHeight}`}>image</div>
      </Link>
      <div className="basis-full">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green
            ${isSmallCard ? "text-base" : "text-lg"}
            ${isSmallCard ? "line-clamp-2" : ""}
          `}
          >
            title
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">autor</h5>
          <h6 className="text-wh-300 text-xs">formatiran date</h6>
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
