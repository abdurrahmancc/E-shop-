import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import blog1 from "../../../assets/blogs/blogs-2.1.png";
import { BlogsModel } from "../../../types/types";

type BlogType = {
  blog: BlogsModel;
};

const BlogCard2 = ({ blog }: BlogType) => {
  const router = useRouter();
  return (
    <div className="max-w-[558px]">
      <figure>
        <Image src={blog?.img} width={558} height={494} alt="blog image" />
      </figure>
      <h4 className="xl:text-[32px] lg:text-[24px] leading-[32px] mt-5 xl:mt-[30px] text-[#374043] xl:leading-[44px] font-[600]">
        {blog?.title}
      </h4>
      <div className="xl:mt-4 mt-3 flex items-center  gap-3">
        <div className="flex xl:gap-2 gap-1 items-center">
          <CiUser className="text-[16px] text-info" />
          <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">Jason</span>
        </div>
        <div className="flex xl:gap-2 gap-1 items-center">
          <CgCalendarDates className="text-[16px] text-info" />
          <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">June 12, 2022</span>
        </div>
        <div className="flex xl:gap-2 gap-1 items-center">
          <TiMessages className="text-[16px] text-info" />
          <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">4 Comments</span>
        </div>
      </div>
      <p className="xl:text-[16px] text-sm my-5 leading-6 xl:leading-[30px] text-[#5E5E5E]">
        {blog?.description.slice(0, 167)}...{" "}
      </p>
      <button
        onClick={() => router.push(`/blogs/${blog?._id}`)}
        className="text-[#031424] bg-primary rounded-[8px] w-[115px] h-[44px] text-[16px] leading-6 font-[600]"
      >
        Read More
      </button>
    </div>
  );
};

export default BlogCard2;
