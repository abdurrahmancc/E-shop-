import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { GoChevronDown } from "react-icons/go";
import { useRouter } from "next/router";

interface Props {
  children: string;
}

const NavContent: FC<PropsWithChildren<Props>> = ({ children: textColor }) => {
  const router = useRouter();
  return (
    <nav className="h-full">
      <ul className="flex menu menu-horizontal gap-x-7 items-center h-full">
        <li className="hover:bg-inherit" tabIndex={0}>
          <Link
            href={"/"}
            className={`focus:bg-inherit p-0 hover:bg-inherit ${textColor} px-0 flex gap-2 items-center`}
          >
            <span
              className={` inline-block pb-1  text-[15px] leading-[26px] ${
                router.pathname == "/"
                  ? "border-primary font-[500] border-b-2"
                  : "border-animate font-[400]"
              }`}
            >
              Home
            </span>
            <GoChevronDown className="w-3 h-3 mb-2" />
          </Link>
          <ul className="menu py-3 rounded-lg overflow-hidden bg-white z-50 w-[270px] shadow-xl">
            <li>
              <Link
                href={"/"}
                className={`sub-menu-animate text-[15px] py-[10px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Home 1</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/home/home2"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Home 2</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/home/home3"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Home 3</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="hover:bg-inherit" tabIndex={0}>
          <Link
            href={"/shop/1"}
            className={`focus:bg-inherit p-0 hover:bg-inherit ${textColor} px-0 flex gap-2 items-center`}
          >
            <span
              className={` inline-block pb-1  text-[15px] leading-[26px] ${
                router.pathname == "/shop/1"
                  ? "border-primary font-[500] border-b-2"
                  : "border-animate font-[400]"
              }`}
            >
              Shop
            </span>
            <GoChevronDown className="w-3 h-3 mb-2" />
          </Link>
          <ul className="menu py-3 rounded-lg overflow-hidden bg-white z-50 w-[270px] shadow-xl">
            <li>
              <Link
                href={"/shop/1"}
                className={`sub-menu-animate text-[15px] py-[10px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Shop default</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/shop/2"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Right Filter Shop</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/shop/3"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Shop wide</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/shop/4"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Product list</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex hover:bg-inherit gap-[10px] items-center">
          <Link
            href={"/about"}
            className={`focus:bg-inherit p-0 hover:bg-inherit ${textColor} px-0 flex gap-2 items-center`}
          >
            <span
              className={` inline-block pb-1  text-[15px] leading-[26px] ${
                router.pathname == "/about"
                  ? "border-primary font-[500] border-b-2"
                  : "border-animate font-[400]"
              }`}
            >
              About
            </span>
          </Link>
        </li>
        <li className="flex hover:bg-inherit gap-[10px] items-center">
          <Link
            href={"/contact"}
            className={`focus:bg-inherit p-0 hover:bg-inherit ${textColor} px-0 flex gap-2 items-center`}
          >
            <span
              className={` inline-block pb-1  text-[16px] leading-[26px] ${
                router.pathname == "/contact"
                  ? "border-primary font-[500] border-b-2"
                  : "border-animate font-[400]"
              }`}
            >
              Contact
            </span>
          </Link>
        </li>
        <li className="flex hover:bg-inherit gap-[10px] items-center">
          <Link
            href={"/blogs"}
            className={`focus:bg-inherit p-0 hover:bg-inherit ${textColor} px-0 flex gap-2 items-center`}
          >
            <span
              className={` inline-block pb-1  text-[15px] leading-[26px] ${
                router.pathname == "/blog"
                  ? "border-primary font-[500] border-b-2"
                  : "border-animate font-[400]"
              }`}
            >
              Blog
            </span>
          </Link>
        </li>
        <li className="hover:bg-inherit" tabIndex={0}>
          <Link
            href={"/blogs/blogs1"}
            className={`focus:bg-inherit p-0 hover:bg-inherit ${textColor} px-0 flex gap-2 items-center`}
          >
            <span
              className={` inline-block pb-1  text-[15px] leading-[26px] ${
                router.pathname == "/blogs/blogs1"
                  ? "border-primary font-[500] border-b-2"
                  : "border-animate font-[400]"
              }`}
            >
              Blog
            </span>
            <GoChevronDown className="w-3 h-3 mb-2" />
          </Link>
          <ul className="menu py-3 rounded-lg overflow-hidden bg-white z-50 w-[270px] shadow-xl">
            <li>
              <Link
                href={"/blogs/blogs1"}
                className={`sub-menu-animate text-[15px] py-[10px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Blog 1</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/blogs/blogs2"}
                className={`sub-menu-animate py-[10px] text-[15px] relative text-[rgba(0,0,0,0.7)] bg-white px-0 font-semibold hover:text-primary`}
              >
                <span className="px-8">Blog 2</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex hover:bg-inherit gap-[10px] items-center">
          <Link
            href={"/home"}
            className={`focus:bg-inherit p-0 hover:bg-inherit ${textColor} px-0 flex gap-2 items-center`}
          >
            <span
              className={` inline-block pb-1  text-[15px] leading-[26px] ${
                router.pathname == "/pages"
                  ? "border-primary font-[500] border-b-2"
                  : "border-animate font-[400]"
              }`}
            >
              Pages
            </span>
            <GoChevronDown className="w-3 h-3 mb-2" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavContent;
