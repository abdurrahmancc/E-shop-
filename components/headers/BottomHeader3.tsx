import Link from "next/link";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import LoginSlider from "../modals/login/LoginSlider";
import NavContent from "./NavContent";

const BottomHeader3 = () => {
  return (
    <>
      <div className="bg-[#041E42] hidden lg:block">
        <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
          <div className="flex py-5 justify-between items-center">
            <NavContent>{"text-white"}</NavContent>
            <div className="flex items-center gap-3">
              <div className="flex gap-2 items-center">
                <FaUser className="w-[14px] h-[14px] text-primary" />
                <div className="flex items-center text-neutral gap-1">
                  <button className="text-[16px]  leading-6 text-neutral">
                    <label htmlFor="signUp" className="cursor-pointer">
                      Login
                    </label>
                  </button>{" "}
                  /{" "}
                  <button className="text-[16px] cursor-pointer leading-6 text-neutral">
                    {" "}
                    <label htmlFor="signUp" className="cursor-pointer">
                      Register
                    </label>
                  </button>
                </div>
              </div>
              <div className="w-[1px] h-[30px] bg-[rgba(255,255,255,0.24)]"></div>
              <div className="flex gap-2 items-center">
                <CiDiscount1 className="w-[16px] h-[16px] text-primary" />
                <Link href={"shop"} className="text-[16px] leading-6 text-neutral">
                  Special Discount
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginSlider />
    </>
  );
};

export default BottomHeader3;
