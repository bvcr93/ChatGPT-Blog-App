import React from "react";
import Card from "../(shared)/Card";
import { Post } from "@prisma/client";

interface TechProps {
  techPosts: Post[];
}

export default function Tech({ techPosts }: TechProps) {
  return (
    <section>
      <hr className="border-1" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          HOT
        </h4>
        <p className="font-bold text-2xl">latest news in tecnology</p>
      </div>
      {/* CARDS */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5 ">
        {/* LARGE CARD */}
        <Card
          post={techPosts[0]}
          className="col-span-1 border row-span-3 "
          imageHeight="h-96"
          isLongForm
        />
        {/* SMALL CARDS */}
        <Card
          post={techPosts[1]}
          className="col-span-1 border row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          post={techPosts[2]}
          className="col-span-1 border row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          post={techPosts[3]}
          className="col-span-1 border row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
      </div>
    </section>
  );
}
