import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import computer from "../../assets/icons/computer.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

const TopCategories = () => {
  const { pathname } = useRouter();
  return (
    <div className="xl:max-w-[290px] hidden lg:block max-w-[250px] w-full">
      <ul
        className={`flex flex-col w-[250px] xl:w-[290px] h-[577px] border border-[#D9D9D9] ${
          pathname !== "/" ? "rounded-[8px]" : "rounded-none"
        }`}
      >
        <li className="border-b text-[#282828] border-[#D9D9D9] transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full flex-grow">
          <div className="dropdown w-full h-full hover:overflow-visible dropdown-right dropdown-hover">
            <label tabIndex={0} className="w-full ">
              <Link
                href={"/shop"}
                className="flex h-full px-[13px] w-full items-center justify-between"
              >
                <div className="flex gap-3 items-center">
                  <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
                </div>
                <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
              </Link>
            </label>
            <ul
              tabIndex={0}
              id="bottom-dropdown-category"
              className="dropdown-content border border-[#D9D9D9] overflow-hidden bg-white text-[#282828] side-dropdown menu shadow  w-52"
            >
              <li className="border-b border-[#D9D9D9] hover:bg-primary  duration-150 ease-in-out transition capitalize">
                <Link href="/" className="pl-8 font-semibold">
                  Item 1
                </Link>
              </li>
              <li className="duration-150 ease-in-out transition hover:bg-primary capitalize">
                <Link href="/" className="pl-8 font-semibold">
                  Item 2
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>

        <li className="border-b transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow border-[#D9D9D9]">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
        <li className="transition-all duration-150 ease-linear hover:bg-primary flex items-center w-full px-[13px] flex-grow">
          <Link href={"/shop"} className="flex w-full items-center justify-between">
            <div className="flex gap-3 items-center">
              <Image src={computer} width={20} height={20} alt="computer" /> Computer & Laptop
            </div>
            <Image src={rightArrow} width={16} height={16} alt="rightArrow" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopCategories;
