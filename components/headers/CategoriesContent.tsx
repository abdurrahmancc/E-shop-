import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import computer from "../../assets/icons/computer.svg";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CategoriesContent = () => {
  const { pathname } = useRouter();
  const isHome1 = pathname == "/";
  const isHome2 = pathname == "/home/home2";

  return (
    <ul
      className={`category-subMenu-slide ${
        isHome1
          ? "top-[110px] border-x bg-white"
          : isHome2
          ? "top-[90px] bg-[#F8F8F8] rounded-[8px]"
          : "top-20 border-x bg-white"
      } max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] absolute z-[100]`}
    >
      <li
        className={`${
          isHome2 ? "border-b" : "border-y"
        } border-[#D9D9D9] hover:text-primary capitalize pl-[13px] w-full text-start`}
      >
        <div className="dropdown  py-[17.37px] w-full hover:overflow-visible dropdown-right dropdown-hover">
          <label tabIndex={0} className="w-full ">
            <Link href={"/shop"} className={"flex items-center justify-between pr-[13px]"}>
              <span className="flex items-center gap-3">
                <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
                <span className={`text-[#282828] text-[16px] leading-[22px]`}>
                  Computer & Laptop
                </span>
              </span>
              <IoIosArrowForward className="text-[#424242] text-[16px]" />
            </Link>
          </label>
          <ul
            tabIndex={0}
            id="bottom-dropdown-category"
            className="dropdown-content overflow-hidden text-[#333] side-dropdown menu shadow bg-base-100  w-52"
          >
            <li className="border-b duration-300 ease-in-out transition border-[#D9D9D9] hover:text-primary capitalize">
              <Link href="/" className="pl-8 hover:bg-white  font-semibold">
                Item 1
              </Link>
            </li>
            <li className="border-[#D9D9D9] duration-300 ease-in-out transition hover:text-primary capitalize">
              <Link href="/" className="pl-8 hover:bg-white  font-semibold">
                Item 2
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
      <li
        className={`${
          isHome2 ? "" : "border-b"
        } border-[#D9D9D9] hover:text-primary capitalize px-[13px] w-full text-start`}
      >
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Computer & Laptop</span>
        </Link>
      </li>
    </ul>
  );
};

export default CategoriesContent;
