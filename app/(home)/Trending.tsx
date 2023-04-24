import React from "react";
type TrendingCardProps = {
  className?: string;
};
export default function Trending() {
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
      <div className="flex justify-between gap-3 my-3 ">
        <div className="basis-1/2 bg-wh-50 h-96 border"></div>
        <div className="basis-1/2 gap-3 bg-wh-50 h-96 border flex flex-col">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="basis-1/2 flex gap-3 ">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
