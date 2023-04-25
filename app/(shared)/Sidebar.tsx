import Image from "next/image";
import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <Image
        className="hidden md:block my-8 w-full"
        alt="advert-2"
        placeholder="blur"
        src={Ad2}
        width={500}
        height={1000}
      />
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          alt="about-profile"
          placeholder="blur"
          src={AboutProfile}
          style={{ width: "500px", height: "350px", objectFit: "cover" }}
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Geoffrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Sit diam vel lacus tortor molestie amet tincidunt. Amet amet arcu sed
        facilisi
      </p>
      <p className="mt-10 italic py-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime est
        voluptas error sed, fugiat ducimus ullam, dignissimos eum itaque
        deserunt nemo, eveniet quisquam accusantium illo reprehenderit harum
        fuga? Repellendus enim reprehenderit nam debitis deleniti, temporibus
        iste in dolorum fuga. Vel animi, vitae fuga officia officiis nisi beatae
        debitis similique maiores soluta at laudantium voluptas quam dolore
        praesentium velit dolores ut deserunt? Velit sapiente fugit rerum animi
        dolor officia, dolore incidunt nostrum porro ratione magni quam
        consequuntur consectetur. Et quam quod, ad animi adipisci veniam modi
      </p>
      <div className="h-[500px] bg-wh-50 w-full border relative">
        <div className="absolute bottom-[25%] p-4 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          unde minima quis repellendus soluta illo natus ut magnam, eveniet eius
          at possimus ratione voluptatem nostrum amet rem odit quam. Sequi
          perspiciatis esse itaque incidunt minima voluptas quia soluta
          obcaecati repellat quibusdam aspernatur dolorum doloremque, nostrum
          dolore fugit nulla laboriosam magnam!
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
