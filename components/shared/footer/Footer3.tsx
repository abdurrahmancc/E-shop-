import Image from "next/image";
import React from "react";
import bg from "../../../assets/bg/footer-3.png";
import logo from "../../../assets/icons/logo-white.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import googleApp from "../../../assets/icons/googlePlay.png";
import appStore from "../../../assets/icons/appStore.png";
import payments from "../../../assets/icons/payments.png";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import Link from "next/link";

const Footer3 = () => {
  const year = new Date().getFullYear();

  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={"bg-[#041E42] bg-cover bg-no-repeat"}
    >
      <div className="pt-[129px] max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="footer md:grid-cols-3 md:grid-flow-dense lg:grid-cols-4 xl:grid-flow-col xl:grid-cols-none pb-[68px] text-base-content">
          <div className="max-w-[323px]">
            <Link href={"/"}>
              <Image src={logo} width={163} height={51} alt="logo" />
            </Link>
            <p className="text-[16px] pt-2 leading-[30px] text-neutral">
              Lorem ipsum dolor sit amet Senectus mattis fermentum mauris orci sit.enim. Orci duis.
            </p>
            <div className="w-[96px] mt-[9px] h-[1px] bg-[rgba(255,255,255,0.62)]"></div>
            <div className="flex mt-[9px] items-center text-[#ffffff] tracking-[0.04em] gap-[8px] text-[16px] leading-[24px]">
              <FaPhoneAlt className="text-lg text-[#FCB700]" />
              +12064812559
            </div>
            <div className="flex mt-2 text-[#ffffff] tracking-[0.04em] gap-[8px] text-[16px] leading-[27px]">
              <HiLocationMarker className="text-lg text-[#FCB700]" />
              4140 Alfred Drive, Elmhurst New York
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
            <div>
              <p className="text-[16px] max-w-[262px] leading-[30px] text-neutral">
                From Google Play Or App Store
              </p>
              <div className="flex mt-5 gap-4">
                <Image
                  src={googleApp}
                  width={169}
                  height={63}
                  className="cursor-pointer"
                  alt="google play"
                />
                <Image
                  src={appStore}
                  width={169}
                  height={63}
                  className="cursor-pointer"
                  alt="app Store"
                />
              </div>
            </div>
            <div className="mt-[25px]">
              <p className="text-[16px] max-w-[262px] leading-[30px] text-neutral">
                Secured Payment Gateways
              </p>
              <div className="flex mt-5 gap-4">
                <Image
                  src={payments}
                  width={342}
                  height={40}
                  className="cursor-pointer"
                  alt="payment methods"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer py-7 border-t justify-center md:justify-between text-base-content border-[rgba(255,255,255,0.40)]">
          <div className="items-center">
            <p className="text-[16px] text-neutral leading-[29px]">
              Copyright &copy; {year}. All rights reserved
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="flex gap-[18px]">
              <div className="bg-[rgba(255,255,255,0.2)] cursor-pointer flex justify-center items-center rounded-[10.86px] w-[43px] h-[43px]">
                <FaFacebookF className="text-[#ffffff] text-[20px]" />
              </div>
              <div className="bg-[rgba(255,255,255,0.2)] cursor-pointer flex justify-center items-center rounded-[10.86px] w-[43px] h-[43px]">
                <BsTwitter className="text-[#ffffff] text-[20px]" />
              </div>
              <div className="bg-[rgba(255,255,255,0.2)] cursor-pointer flex justify-center items-center rounded-[10.86px] w-[43px] h-[43px]">
                <BsInstagram className="text-[#ffffff] text-[20px]" />
              </div>
              <div className="bg-[rgba(255,255,255,0.2)] cursor-pointer flex justify-center items-center rounded-[10.86px] w-[43px] h-[43px]">
                <SiMinutemailer className="text-[#ffffff] text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
