import React, { useState } from "react";
import BlogCard2 from "../../shared/cards/BlogCard2";
import Pagination from "../../shared/pagination/Pagination";
import BlogSidebar from "../BlogSidebar";

const Blogs2 = () => {
  const [page, setPage] = useState<number>(4);
  const [pageCount, setPageCount] = useState<number>(3);

  return (
    <div className="flex flex-col sm:flex-row gap-x-[30px] gap-y-[50px]">
      <div className="max-w-[1146px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] gap-[30px]">
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
          <BlogCard2 />
        </div>
        <div className="flex justify-center mt-[50px]">
          <Pagination pageCount={3} setPage={setPage} />
        </div>
      </div>
      <div className="sm:max-w-[264px]">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default Blogs2;
