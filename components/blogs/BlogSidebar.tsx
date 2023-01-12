import React from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import demo1 from "../../assets/blogs/demo-1.png";
import demo2 from "../../assets/blogs/demo-2.png";
import demo3 from "../../assets/blogs/demo-3.png";
import demo4 from "../../assets/blogs/demo-4.png";
import demo5 from "../../assets/blogs/demo-5.png";
import { type } from "os";

type FormData = {
  search: string;
};

interface Categories {
  label: string;
  value: string;
}

type BlogsDemo = {
  _id: string;
  name: string;
  date: string;
  img: any;
};

const blogsDemo: BlogsDemo[] = [
  {
    _id: "1",
    name: "Design Your Way To The Future",
    date: "OCTOBER 2, 2022",
    img: demo1,
  },
  {
    _id: "2",
    name: "Design Your Way To The Future",
    date: "OCTOBER 2, 2022",
    img: demo2,
  },
  {
    _id: "3",
    name: "Design Your Way To The Future",
    date: "OCTOBER 2, 2022",
    img: demo3,
  },
  {
    _id: "4",
    name: "Design Your Way To The Future",
    date: "OCTOBER 2, 2022",
    img: demo4,
  },
  {
    _id: "5",
    name: "Design Your Way To The Future",
    date: "OCTOBER 2, 2022",
    img: demo5,
  },
];

const categories: Categories[] = [
  { label: "Computer & Laptop", value: "computer&Laptop" },
  { label: "Television & Video", value: "television&Video" },
  { label: "Headphones", value: "computer&Laptop" },
  { label: "Smartphones", value: "headphones" },
  { label: "Camera & Photos", value: "smartphones" },
  { label: "Smart Watches", value: "smartWatches" },
  { label: "Video Games", value: "videoGames" },
];

const BlogSidebar = () => {
  const isLastCategory = categories.length - 1;
  const {
    register,
    resetField,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const inputSearch = watch("search");

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <div className="border rounded-[8px] border-[#D9D9D9] box-border">
        <div className="">
          <h4 className="text-[#424242] relative border-b border-[#D9D9D9] py-4 pl-6 font-[600] text-[20px] leading-[32px]">
            Search
            <div className="w-[63px] h-[1px] bg-primary absolute bottom-[-1px]"></div>
          </h4>

          <form className="" onSubmit={onSubmit}>
            <div className="form-control py-4">
              <div className="relative max-w-[216px] md:mx-auto pl-6 md:pl-0 ">
                <input
                  placeholder="Search..."
                  type="text"
                  {...register("search")}
                  className="placeholder:italic w-full placeholder:text-slate-400 text-[10px] box-border max-w-[216px] h-[34px] block pr-9 shadow-sm focus:outline-none input rounded-[4px] border border-[#E0E0E0] bg-white focus:ring-0"
                />
                <button className=" absolute flex justify-center items-center h-[34px] w-[34px] right-0 top-0 rounded-r-[4px] bg-primary">
                  <FiSearch className="text-[16px] text-[#031424]" />
                </button>
                <button
                  onClick={() => resetField("search")}
                  className={`absolute right-[14%] p-[ppx] rounded top-1 ${
                    inputSearch ? "block" : "hidden"
                  }`}
                >
                  <IoIosClose className="text-2xl text-gray-400" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-[30px] flex justify-center flex-col bg-[#0070DC] rounded-[8px] p-[30px]">
        <h5 className="text-[20px] leading-[30px] font-[500] text-center text-white ">
          We Make <br /> DevOps Easier
        </h5>
        <button className="text-[#031424] mx-auto max-w-[191px] w-full text-[16px] leading-[24px] mt-5 h-[38px] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate bg-primary inline-block rounded-[45px]">
          Get an assessment
        </button>
      </div>
      <div className="border mt-[30px] rounded-[8px] border-[#D9D9D9] box-border">
        <div className="">
          <h4 className="text-[#424242] relative border-b border-[#D9D9D9] py-4 pl-6 font-[600] text-[20px] leading-[32px]">
            Categories
            <div className="w-[63px] h-[1px] bg-primary absolute bottom-[-1px]"></div>
          </h4>

          <div className="pl-6 py-4">
            {categories.map((category, i) => (
              <div key={i} className={`form-control ${isLastCategory == i ? "" : "pb-4"}`}>
                <label className="label p-0 justify-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => {}}
                    className="checkbox w-[14px] h-[14px] hover:border-[#414141] checked:border-none border-[#414141] checkbox-primary rounded-none "
                  />
                  <span className="label-text text-[#414141] text-sm leading-[22px] ">
                    {category?.label}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border mt-[30px] rounded-[8px] border-[#D9D9D9] box-border">
        <div className="">
          <h4 className="text-[#424242] relative border-b border-[#D9D9D9] py-4 pl-6 font-[600] text-[20px] leading-[32px]">
            Related Posts
            <div className="w-[63px] h-[1px] bg-primary absolute bottom-[-1px]"></div>
          </h4>

          <div className="px-6 py-4">
            <div className="flex flex-col gap-4">
              {blogsDemo.map((demo) => {
                return (
                  <div key={demo?._id} className="max-w-[216px] flex gap-2 items-center">
                    <figure>
                      <Image
                        src={demo?.img}
                        height={66}
                        className="rounded-[4px] w-[66px] min-w-[66px] h-[66px]"
                        width={66}
                        alt="blog image"
                      />
                    </figure>
                    <div>
                      <span className="text-[8px] text-[#031424] leading-[22px]">{demo?.date}</span>
                      <h5 className="text-[12px] text-[#000000] font-[500] leading-[18px]">
                        {demo?.name}
                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border mt-[30px] rounded-[8px] border-[#D9D9D9] box-border">
        <div className="">
          <h4 className="text-[#424242] relative border-b border-[#D9D9D9] py-4 pl-6 font-[600] text-[20px] leading-[32px]">
            Tags
            <div className="w-[63px] h-[1px] bg-primary absolute bottom-[-1px]"></div>
          </h4>

          <div className="pl-[24px] py-4 flex gap-2 flex-wrap">
            <span className="text-[#031424] bg-primary inline-block text-[12px] leading-[22px] px-3 py-[3px]">
              Tech
            </span>
            <span className="text-[#031424] bg-primary inline-block text-[12px] leading-[22px] px-3 py-[3px]">
              Apple
            </span>
            <span className="text-[#031424] bg-primary inline-block text-[12px] leading-[22px] px-3 py-[3px]">
              Marketing
            </span>
            <span className="text-[#031424] bg-primary inline-block text-[12px] leading-[22px] px-3 py-[3px]">
              Gadget
            </span>
            <span className="text-[#031424] bg-primary inline-block text-[12px] leading-[22px] px-3 py-[3px]">
              Phone
            </span>
            <span className="text-[#031424] bg-primary inline-block text-[12px] leading-[22px] px-3 py-[3px]">
              Camera
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
