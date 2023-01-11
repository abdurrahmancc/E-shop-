import React, { useState } from "react";
import { BlogsModel } from "../../../types/types";
import BlogCard1 from "../../shared/cards/BlogCard1";
import Pagination from "../../shared/pagination/Pagination";
import BlogSidebar from "../BlogSidebar";

type BlogsType = {
  blogs: BlogsModel[];
};

const Blogs = ({ blogs }: BlogsType) => {
  const [page, setPage] = useState<number>(4);
  const [active, setActive] = useState<String>("all");
  const [pageCount, setPageCount] = useState<number>(4);

  return (
    <div>
      <h2 className="text-[#343434] text-[38px] pb-[30px] font-[600] leading-[57px]">Enterprise</h2>
      <div className="inline-block">
        <ul className={`flex gap-[12px] rounded-full px-[19px] py-[14px] bg-[#F3F6FB]`}>
          <li
            onClick={() => setActive("all")}
            className={`capitalize lg:text-[20px] lg:leading-[30px] md:text-[18px] leading-7 cursor-pointer lg:px-5 px-4 rounded-[35px] lg:py-[6px] py-[5px] ${
              active === "all" ? "bg-primary text-[#000000]" : "text-secondary  hover:bg-white"
            }`}
          >
            All
          </li>
          <li
            onClick={() => setActive("technology")}
            className={`capitalize hidden sm:block lg:text-[20px] lg:leading-[30px] md:text-[18px] leading-7 cursor-pointer lg:px-5 px-4 rounded-[35px] lg:py-[6px] py-[5px] ${
              active === "technology"
                ? "bg-primary text-[#000000]"
                : "text-secondary  hover:bg-white"
            }`}
          >
            Technology
          </li>
          <li
            onClick={() => setActive("development")}
            className={`capitalize hidden md:block lg:text-[20px] lg:leading-[30px] md:text-[18px] leading-7 cursor-pointer lg:px-5 px-4 rounded-[35px] lg:py-[6px] py-[5px] ${
              active === "development"
                ? "bg-primary text-[#000000]"
                : "text-secondary  hover:bg-white"
            }`}
          >
            development
          </li>
          <li
            onClick={() => setActive("trending")}
            className={`capitalize lg:text-[20px] lg:leading-[30px] md:text-[18px] leading-7 cursor-pointer lg:px-5 px-4 rounded-[35px] lg:py-[6px] py-[5px] ${
              active === "trending" ? "bg-primary text-[#000000]" : "text-secondary  hover:bg-white"
            }`}
          >
            trending
          </li>
          <li
            onClick={() => setActive("recent")}
            className={`capitalize lg:text-[20px] lg:leading-[30px] md:text-[18px] leading-7 cursor-pointer lg:px-5 px-4 rounded-[35px] lg:py-[6px] py-[5px] ${
              active === "recent" ? "bg-primary text-[#000000]" : "text-secondary  hover:bg-white"
            }`}
          >
            Recent
          </li>
          <li
            onClick={() => setActive("popular")}
            className={`capitalize lg:text-[20px] lg:leading-[30px] md:text-[18px] leading-7 cursor-pointer lg:px-5 px-4 rounded-[35px] lg:py-[6px] py-[5px] ${
              active === "popular" ? "bg-primary text-[#000000]" : "text-secondary  hover:bg-white"
            }`}
          >
            Popular
          </li>
        </ul>
      </div>
      <div className="flex mt-[50px] flex-col sm:flex-row gap-x-[30px] gap-y-[50px]">
        <div className="max-w-[1146px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[35px] gap-[30px]">
            {blogs.map((blog, i) => {
              return <BlogCard1 key={i} blog={blog} />;
            })}
          </div>
          <div className="flex justify-center mt-[65px]">
            <Pagination pageCount={3} setPage={setPage} />
          </div>
        </div>
        <div className="sm:max-w-[264px]">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
