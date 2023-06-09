import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Post } from "@prisma/client";

interface TrendingProps {
  trendingPosts: Post[];
}

export default function Trending({ trendingPosts }: TrendingProps) {
  return (
    <section className="pt-3 pb-10 ">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          consequuntur atque obcaecati soluta officia vitae? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Libero neque rerum magni,
          consequatur dolore repellat consectetur numquam similique atque
          sapiente.
        </p>
      </div>
      {/* <div className="flex justify-between gap-3 my-3 ">
        <div className="basis-1/2 bg-wh-500 h-96 border"></div>
        <div className="basis-1/2 gap-3 bg-wh-50 h-96 border flex flex-col">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="basis-1/2 flex gap-3 ">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}
      <div className="sm:grid grid-cols-4 gap-5 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard
          className=" col-span-2 row-span-2"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className=" col-span-2 row-span-1"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className=" col-span-1 row-span-1"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className=" col-span-1 row-span-1"
          post={trendingPosts[3]}
        />
      </div>
      <p className="text-sm">
        Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Doloribus, perferendis! dolor sit amet consectetur, adipisicing elit.
        Dolores, sint.
      </p>
    </section>
  );
}

// TRENDING CARD COMPONENT

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="tech"
          src={post?.image}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post.category}
        </h4>
        <div className="text-wh-100 mt-2">{post.title}</div>
      </div>
    </Link>
  );
};
