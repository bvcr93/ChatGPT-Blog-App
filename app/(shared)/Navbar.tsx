'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Ad1 from "../../public/assets/ad-1.jpg";
import SocialLinks from "./SocialLinks";
import { motion } from 'framer-motion'


const Navbar = () => {
  return (
    <header className="mb-5">
   
   <nav className="bg-black text-wh-10 w-full py-4">
    <div className="maincol flex justify-between items-center">
      <div className="hidden sm:block ">
        <SocialLinks />
      </div>
      <div className="flex justify-between items-center gap-10">
        <Link href="/">Home</Link>
        <Link href="/">Trending</Link>
        <Link href="/">About</Link>
      </div>
      <div>
        <p>Sign In</p>
      </div>
    </div>
  </nav>
        <div
       
        className="flex justify-between gap-8 mt-5 mb-4 maincol">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
           className="basis-2/3 md:mt-3">
            <h1 className="font-bold text-3xl md:text-5xl">
              BLOG OF THE FUTURE
            </h1>
            <p className="text-sm mt-3">
              Blog dedicated towards AI generation and job automation
            </p>
          </motion.div>
          <div className="basis-full relative w-auto h-32 bg-wh-500">
            <Image
              fill
              alt="advert-1"
              placeholder="blur"
              src={Ad1}
              sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <hr className="border-1 mx-10" />
 
    </header>
  );
};

export default Navbar;
