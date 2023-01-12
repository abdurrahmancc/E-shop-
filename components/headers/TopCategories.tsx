import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { GiCherry, GiChickenOven, GiFruitTree, GiHotMeal, GiTreeBranch } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import computer from "../../assets/icons/computer.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

const TopCategories = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [hovered, setHovered] = useState("");
  const [toggle, setToggle] = useState(true);
  const { pathname } = useRouter();

  return (
    <div className="xl:max-w-[290px] hidden lg:block max-w-[250px] w-full">
      {/* <ul
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
      </ul> */}
      {/* <ul
        className={`category-subMenu-slide top-20 ${
          isCategoriesOpen ? "border-b" : ""
        } border-x max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] bg-white rounded-b-lg absolute z-[100]`}
      >
        <li
          onMouseEnter={() => setHovered("grocery&frozen")}
          onMouseLeave={() => setHovered("")}
          className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
        >
          <div className="dropdown  py-3 w-full hover:overflow-visible dropdown-right dropdown-hover">
            <label tabIndex={0} className="w-full ">
              <Link href={"/shop"} className={"flex items-center justify-between pr-8"}>
                <span className="flex items-center gap-3">
                  <GiFruitTree
                    className={`text-lg ${
                      hovered === "grocery&frozen"
                        ? "text-primary duration-300 ease-in-out transition"
                        : "text-[#B8B8BC]"
                    }`}
                  />
                  <span className={`font-semibold`}>Grocery & Frozen</span>
                </span>
                <IoIosArrowForward />
              </Link>
            </label>
            <ul
              tabIndex={0}
              id="bottom-dropdown-category"
              className="dropdown-content overflow-hidden text-[#333] side-dropdown menu shadow bg-base-100  w-52"
            >
              <li className="border-b duration-300 ease-in-out transition border-gray-200 hover:text-primary capitalize">
                <Link href="/" className="pl-8 hover:bg-white  font-semibold">
                  Item 1
                </Link>
              </li>
              <li className="border-gray-200 duration-300 ease-in-out transition hover:text-primary capitalize">
                <Link href="/" className="pl-8 hover:bg-white  font-semibold">
                  Item 2
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          onMouseEnter={() => setHovered("freshVegetable")}
          onMouseLeave={() => setHovered("")}
          className="transition duration-300 ease-in-out border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
        >
          <Link href={"/shop"} className={"py-3  relative flex gap-3 items-center font-semibold"}>
            <GiTreeBranch
              className={`text-lg  ${
                hovered === "freshVegetable"
                  ? "duration-300 ease-in-out transition text-primary"
                  : "text-[#B8B8BC]"
              }`}
            />{" "}
            Fresh Vegetable
          </Link>
        </li>
        <li
          onMouseEnter={() => setHovered("freshFruits")}
          onMouseLeave={() => setHovered("")}
          className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
        >
          <Link href={"/shop"} className={"py-3 relative font-semibold flex items-center gap-3"}>
            <GiCherry
              className={`text-lg  ${
                hovered === "freshFruits"
                  ? "duration-300 ease-in-out transition text-primary"
                  : "text-[#B8B8BC]"
              }`}
            />{" "}
            Fresh Fruits
          </Link>
        </li>
        <li
          onMouseEnter={() => setHovered("fruitJuices")}
          onMouseLeave={() => setHovered("")}
          className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
        >
          <Link href={"/shop"} className={"py-3 flex items-center gap-3  relative font-semibold"}>
            <FaGlassMartiniAlt
              className={`text-lg  ${
                hovered === "fruitJuices"
                  ? "duration-300 ease-in-out transition text-primary"
                  : "text-[#B8B8BC]"
              }`}
            />{" "}
            Fruit Juices
          </Link>
        </li>
        <li
          onMouseEnter={() => setHovered("salads")}
          onMouseLeave={() => setHovered("")}
          className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
        >
          <Link href={"/shop"} className={"py-3 flex items-center gap-3 relative font-semibold"}>
            <GiHotMeal
              className={`text-lg ${
                hovered === "salads"
                  ? "duration-300 ease-in-out transition text-primary"
                  : "text-[#B8B8BC]"
              }`}
            />{" "}
            Salads
          </Link>
        </li>
        <li
          onMouseEnter={() => setHovered("freshMeat")}
          onMouseLeave={() => setHovered("")}
          className="transition duration-300 ease-in-out  border-b border-gray-200 hover:text-primary capitalize pl-8 w-full text-start"
        >
          <Link
            href={"/shop"}
            className={"py-3 flex justify-items-start gap-3  relative font-semibold"}
          >
            <GiChickenOven
              className={`text-lg ${
                hovered === "freshMeat"
                  ? "duration-300 ease-in-out transition text-primary"
                  : "text-[#B8B8BC]"
              }`}
            />{" "}
            Fresh Meat
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default TopCategories;
