import React from "react";
import Card from "../(shared)/Card";
export default function Tech() {
  return (
    <section>
      <hr className="border-1" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">HOT</h4>
        <p className="font-bold text-2xl">latest news in tecnology</p>
      </div>
        {/* CARDS */}
        <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5 ">
        {/* LARGE CARD */}
        <Card
          className="col-span-1 border row-span-3 "
          imageHeight="h-96"
          isLongForm
        />
        {/* SMALL CARDS */}
        <Card
          className="col-span-1 border row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="col-span-1 border row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
        <Card
          className="col-span-1 border row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
        />
      </div>

    </section>
  );
}
