import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { HiBars3 } from "react-icons/hi2";
import CategoriesContent from "./CategoriesContent";

const BottomHeaderCategories1 = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/home" || pathname === "/") {
      setIsCategoriesOpen(true);
    } else {
      setIsCategoriesOpen(false);
    }
  }, [pathname]);

  return (
    <div
      id="header-categories-dropdown"
      className="header-categories-test  max-w-[250px] xl:max-w-[290px] relative w-screen hidden lg:block"
    >
      <button
        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        className=" bg-primary flex justify-between items-center px-3 text-secondary w-full h-[60px]"
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

export default BottomHeaderCategories1;
