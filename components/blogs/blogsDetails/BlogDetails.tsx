import Image from "next/image";
import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RiLayoutGridFill } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";
import { BlogsModel } from "../../../types/types";
import BlogSidebar from "../BlogSidebar";
import TopBlogDetails from "./TopBlogDetails";
import admin from "../../../assets/users/admin.jpg";
import BlogComments from "./BlogComments";
import CommentForm from "./CommentForm";

type BlogType = {
  blog: BlogsModel;
};

const BlogDetails = ({ blog }: BlogType) => {
  return (
    <div className="flex mt-[50px] flex-col sm:flex-row gap-x-[30px] gap-y-[50px]">
      <div className="max-w-[1146px]">
        {/* ============ top details start ============= */}
        <div>
          <TopBlogDetails blog={blog} />
          <div className="py-5 border-t flex items-center justify-between">
            <div className="flex gap-2 items-center border-[#C7C7C7]">
              <span className="text-[#031424] lg:text-[16px] text-sm font-[500] leading-[24px]">
                Tag:
              </span>
              <ul className="flex items-center gap-[5px] lg:text-[16px] text-sm leading-[24px]">
                <li>
                  <a href="">Apple iMac,</a>
                </li>
                <li>
                  <a href="">Apple PC,</a>
                </li>
                <li>
                  <a href="">Apple Desktop</a>
                </li>
              </ul>
            </div>
            <div className="flex lg:gap-3 gap-[5px]">
              <div className="bg-[#3B5998] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
                <FaFacebookF className="text-[#ffffff] lg:text-[20px] text-[16px]" />
              </div>
              <div className="bg-[#1DA1F2] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
                <BsTwitter className="text-[#ffffff] lg:text-[20px] text-[16px]" />
              </div>
              <div className="bg-[#E60023] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
                <BsInstagram className="text-[#ffffff] lg:text-[20px] text-[16px]" />
              </div>
              <div className="bg-[#0077B5] cursor-pointer flex justify-center items-center rounded-[32.86px] lg:w-[38px] lg:h-[38px] w-[28px] h-[28px]">
                <SiMinutemailer className="text-[#ffffff] lg:text-[20px] text-[16px]" />
              </div>
            </div>
          </div>
          <div className="w-full bg-[#F5F5F5]">
            <ul className="flex max-w-[984px] mx-auto py-9 items-center justify-between">
              <li className="text-[20px] cursor-pointer flex items-center gap-2 leading-[30px] font-[500] text-[#031424]">
                <IoIosArrowBack />
                <span>Previous Post</span>
              </li>
              <li className="text-[30px] cursor-pointer">
                <RiLayoutGridFill />
              </li>
              <li className="text-[20px] cursor-pointer flex items-center gap-2 leading-[30px] font-[500] text-[#031424]">
                <span>Next Post</span>
                <IoIosArrowForward />
              </li>
            </ul>
          </div>
          <div className="flex bg-[#F5F5F5] mt-[50px] p-[35px] items-center gap-x-5">
            <figure>
              <Image src={admin} height={200} width={200} alt="admin" />
            </figure>
            <div className="max-w-[856px]">
              <span className="text-[16px] leading-[24px] text-[#424242] ">AUTHOR</span>
              <h5 className="text-[28px] mt-[2px] mb-3 leading-[42px] text-[#031424] font-[500]">
                Paul Rivera
              </h5>
              <p className="text-[16px] leading-[30px] text-[#424242]">
                Lorem ipsum dolor sit amet consectetur. Ut tellus urna nunc elit tincidunt arcu.
                Eros tempor nibh congue mi integer. Phasellus volutpat pretium suspendisse vitae.
                Pellentesque gravida egestas vel lacus senectus vel. Quam suspendisse nunc neque
                purus praesent.
              </p>
            </div>
          </div>
        </div>
        {/* ============ top details end ============= */}
        {/* ============ Comments start ============= */}
        <div className="mt-20">
          <BlogComments />
        </div>
        <div className="mt-20">
          <CommentForm />
        </div>
        {/* ============ Comments end ============= */}
      </div>
      <div className="sm:max-w-[264px] min-w-[264px] ">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogDetails;
