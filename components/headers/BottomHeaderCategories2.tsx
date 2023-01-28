import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoChevronDownSharp } from "react-icons/io5";
import CategoriesContent from "./CategoriesContent";

const BottomHeaderCategories2 = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/home/home2") {
      setIsCategoriesOpen(true);
    } else {
      setIsCategoriesOpen(false);
    }
  }, [pathname]);
  return (
    <div
      id="header-categories-dropdown"
      className="header-categories-test relative max-w-[250px] xl:max-w-[290px] w-full"
    >
      <button
        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        className=" bg-primary flex justify-between items-center px-3 text-secondary w-full h-[65px]"
      >
        <span className="flex items-center gap-2">
          <HiBars3 className="w-[21px] h-[21px] " />
          <span className="text-[16px] font-[500] leading-[26px]"> All Categories</span>{" "}
        </span>
        <IoChevronDownSharp
          className={`w-5 h-5 transition-all duration-200 ease-linear ${
            isCategoriesOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
      <input type="checkbox" onChange={() => {}} checked={isCategoriesOpen} id="touch-category" />
      <CategoriesContent />
    </div>
  );
};

export default BottomHeaderCategories2;
