import Image from "next/image";
import { Inter } from "next/font/google";
import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Other from "./(shared)/Other";
import Subscribe from "./(shared)/Subscribe";
import Sidebar from "./(shared)/Sidebar";
import { prisma } from "./api/hello/client";
import { Post } from "@prisma/client";
const inter = Inter({ subsets: ["latin"] });

const getPosts = async () => {
  const posts: Post[] = await prisma.post.findMany();
  return posts;
};

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);

  const formatPosts = () => {
    const trendingPosts: Post[] = [];
    const techPosts: Post[] = [];
    const travelPosts: Post[] = [];
    const otherPosts: Post[] = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }
      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (
        post?.category === "Interior Design" ||
        post?.category === "Fashion" ||
        post?.category === "Food"
      ) {
        otherPosts.push(post);
      } 
     
    });
    return [trendingPosts, techPosts, travelPosts, otherPosts];
  };

  const [ trendingPosts, techPosts, travelPosts, otherPosts ] = formatPosts();

  return (
    <main className="px-10 leading-7 maincol">
      <Trending trendingPosts= {trendingPosts}/>
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block ">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
