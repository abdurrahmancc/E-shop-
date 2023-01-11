import Image from "next/image";
import React from "react";
import bg from "../../../assets/bg/footer-1.png";
import payment from "../../../assets/icons/payment.png";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import googleApp from "../../../assets/icons/googlePlay.png";
import appStore from "../../../assets/icons/appStore.png";
import logo from "../../../assets/icons/logo-white.png";
import { SiMinutemailer } from "react-icons/si";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Footer1 = () => {
  const year = new Date().getFullYear();
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={"bg-[#041E42] bg-cover bg-no-repeat"}
    >
      <div className="pt-[88px] max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="footer md:grid-cols-3 md:grid-flow-dense lg:grid-cols-4 xl:grid-flow-col xl:grid-cols-none pb-[90px] text-base-content">
          <div className="max-w-[323px]">
            <Image src={logo} width={163} height={51} alt="logo" />
            <p className="text-[16px] pt-2 leading-[30px] text-neutral">
              Lorem ipsum dolor sit amet Senectus mattis fermentum mauris orci sit.enim. Orci duis.
            </p>
            <div className="w-[96px] mt-[7px] h-[1px] bg-[rgba(255,255,255,0.62)]"></div>
            <div className="mt-[7px]">
              <p className="text-[16px] max-w-[262px] leading-[30px] text-neutral">
                From Google Play Or App Store
              </p>
              <div className="flex mt-[15px] gap-4">
                <Image
                  src={googleApp}
                  width={169}
                  height={50}
                  className="cursor-pointer xl:max-w-[150px] 2xl:max-w-full h-auto md:max-w-[100px] max-w-[130px]"
                  alt="google play"
                />
                <Image
                  src={appStore}
                  width={169}
                  height={50}
                  className="cursor-pointer xl:max-w-[150px] 2xl:max-w-full h-auto md:max-w-[100px] max-w-[130px]"
                  alt="app Store"
                />
              </div>
            </div>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-[10px] text-[20px] leading-[30px] font-[600] text-primary">
              CUSTOMER SERVICE
            </span>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Contact us
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Payments & Returns
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Shipping & Returns
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Terms and conditions
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Refund Policy
            </a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-[10px] text-[20px] leading-[30px] font-[600] text-primary">
              USEFUL LINKS
            </span>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              About Us
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Shop Products
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              My Cart
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Order Tracking
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Privacy Policy
            </a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-[10px] text-[20px] leading-[30px] font-[600] text-primary">
              Categories
            </span>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Computer & Laptop
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Television & Video
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Headphones
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Smartphones
            </a>
            <a className="hover:translate-x-3 transition-transform duration-200 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Camera & Photos
            </a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-[10px] text-[20px] leading-[30px] font-[600] text-primary">
              Information
            </span>
            <div className="text-[16px] leading-[32px] text-neutral flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex justify-center items-center bg-primary text-[#031424]">
                <FaPhoneAlt />
              </div>
              +12064812559
            </div>
            <div className="text-[16px] leading-[32px] text-neutral flex items-center gap-2">
              {" "}
              <div className="w-7 h-7 rounded-full flex justify-center items-center bg-primary text-[#031424]">
                <IoIosMail />
              </div>{" "}
              info@demo.com
            </div>
            <a className="text-[16px] leading-[32px] text-neutral flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex justify-center items-center bg-primary text-[#031424]">
                <HiLocationMarker />
              </div>{" "}
              4140 Alfred Drive, New York
            </a>
            <div className="mt-[4px]">
              <span className="text-[16px] leading-[30px] text-[#FFFFFF] ">Follow Us</span>
              <div className="md:place-self-center pt-[15px] md:justify-self-end">
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
        <div className="footer pt-7 pb-8 border-t text-base-content border-[rgba(255,255,255,0.40)]">
          <div className="items-center grid-flow-col">
            <p className="text-[16px] text-neutral leading-[29px]">
              Copyright &copy; {year}. All rights reserved
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <Image
              src={payment}
              width={342}
              height={40}
              className="h-10 sm:max-w-[342.77px]"
              alt="payment method"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
