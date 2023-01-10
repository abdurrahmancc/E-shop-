import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { BlogsModel } from "../../../types/types";

interface BlogModel {
  blog: BlogsModel;
}

const BlogCard1 = ({ blog }: BlogModel) => {
  return (
    <div className="card hover:top-[-4px] relative top-0 ease-in-out duration-500 card-compact max-w-[558px] mx-auto  bg-base-100 shadow">
      <figure>
        <Image
          width={558}
          height={364}
          className={"max-h-[364px] rounded-t-[8px]"}
          src={blog?.img}
          alt="blog"
        />
      </figure>
      <span className="absolute right-5 px-[23px] py-2 rounded-full uppercase text-[#031424] inline-block text-[14px] leading-[22px] top-5 bg-primary font-[500]">
        {blog?.category}
      </span>
      <div className="card-body gap-0 !p-[30px] bg-[#F3F6FB]">
        <h4 className="xl:text-[32px] lg:text-[24px] leading-[32px] text-[#374043] xl:leading-[44px] font-[600]">
          10 Ways To Easily Grow Your Agency Business
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
        <p className="xl:text-[16px] text-sm mt-5 leading-6 xl:leading-[30px] text-[#5E5E5E]">
          {blog?.description.slice(0, 153)}...{" "}
        </p>
        <div className="card-actions justify-start pt-5">
          {" "}
          <Link
            href={`/blogs/${blog?._id}`}
            className="capitalize leading-6 font-[500] text-[16px] text-info"
          >
            read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard1;
