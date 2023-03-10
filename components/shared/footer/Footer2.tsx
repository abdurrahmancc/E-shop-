import Image from "next/image";
import React from "react";
import bg from "../../../assets/bg/footer-2.png";
import logo from "../../../assets/icons/logo-white.png";
import Newsletter2 from "../newsletter/Newsletter2";
import Features2 from "../../features/Features2";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import googleApp from "../../../assets/icons/googlePlay.png";
import appStore from "../../../assets/icons/appStore.png";
import payment from "../../../assets/icons/payment2.png";
import { useRouter } from "next/router";

const Footer2 = () => {
  const year = new Date().getFullYear();
  const router = useRouter();

  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={"bg-[#041E42] bg-cover bg-no-repeat"}
    >
      <div className="max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
        {/* ============= features start =========== */}
        <div className="relative w-full">
          <div className="absolute xl:-top-[68px] lg:-top-16 sm:-top-24 md:-top-24 -top-44 w-full">
            <div className="w-full">
              <div className="2xl:w-[1443px] xl:w-[1200px] lg:w-[940px] mx-auto">
                <Features2 />
              </div>
            </div>
          </div>
        </div>

        {/* ============= features end =========== */}
        <div className="pb-[54px] sm:pt-[146px] pt-[200px]">
          <Newsletter2 />
        </div>
        <div className="pt-[56px] border-t border-[rgba(255,255,255,0.28)]">
          <div className="footer pb-[54px] text-base-content">
            <div onClick={() => router.push("/")} className="max-w-[323px]">
              <Image src={logo} width={163} height={51} alt="logo" />
              <p className="text-[16px] pt-2 leading-[30px] text-neutral">
                Lorem ipsum dolor sit amet Senectus mattis fermentum mauris orci sit.enim. Orci
                duis.
              </p>
              <div className="flex mt-2 items-center text-[#ffffff] tracking-[0.04em] gap-[8px] text-[16px] leading-[24px]">
                <FaPhoneAlt className="text-lg text-[#FCB700]" />
                +12064812559
              </div>
              <div className="flex mt-2 text-[#ffffff] tracking-[0.04em] gap-[8px] text-[16px] leading-[27px]">
                <HiLocationMarker className="text-lg text-[#FCB700]" />
                4140 Alfred Drive, Elmhurst New York
              </div>
              <div className="mt-[21px]">
                <Image src={payment} width={252} height={35} alt="payment method" />
              </div>
            </div>
            <div>
              <span className="footer-title opacity-100 mb-5 text-[20px] leading-[30px] font-[600] text-primary">
                Information
              </span>
              <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" /> About Us
              </a>
              <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Contact Us
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Term & Condition
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Return Policy
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Shipping Return
              </a>
            </div>
            <div>
              <span className="footer-title opacity-100 mb-5 text-[20px] leading-[30px] font-[600] text-primary">
                Information
              </span>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                <IoIosArrowForward className="text-[16px]" /> About Us
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                <IoIosArrowForward className="text-[16px]" />
                Contact Us
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Term & Condition
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Return Policy
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Shipping Return
              </a>
            </div>
            <div>
              <span className="footer-title opacity-100 mb-5 text-[20px] leading-[30px] font-[600] text-primary">
                Information
              </span>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" /> About Us
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Contact Us
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Term & Condition
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Return Policy
              </a>
              <a className=" hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
                {" "}
                <IoIosArrowForward className="text-[16px]" />
                Shipping Return
              </a>
            </div>
            <div>
              <span className="footer-title opacity-100 mb-5 text-[20px] leading-[30px] font-[600] text-primary">
                Download App
              </span>
              <p className="text-[16px] max-w-[262px] leading-[30px] text-neutral">
                App is now available on Play & App Store. Get it now.
              </p>
              <Image
                src={googleApp}
                width={205}
                height={64}
                className="mt-3  hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer"
                alt="google play"
              />
              <Image
                src={appStore}
                width={205}
                height={64}
                className="mt-3  hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer"
                alt="app Store"
              />
            </div>
          </div>
          <div className="pt-[30px] pb-[53px] text-base-content border-t border-[rgba(255,255,255,0.28)]">
            <p className="text-[16px] text-center text-neutral leading-[29px]">
              Copyright &copy; {year}. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
