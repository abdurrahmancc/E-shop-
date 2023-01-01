import Image from "next/image";
import React from "react";
import bg from "../../../assets/bg/footer-1.png";
import payment from "../../../assets/icons/payment.png";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";

const Footer1 = () => {
  const year = new Date().getFullYear();
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={"bg-secondary bg-cover bg-no-repeat"}
    >
      <div className="pt-[88px] max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="footer pb-[90px] text-base-content">
          <div className="">
            <span className="footer-title opacity-100 mb-[10px] text-[20px] leading-[30px] font-[600] text-primary">
              CUSTOMER SERVICE
            </span>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Contact us
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Payments & Returns
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Shipping & Returns
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Terms and conditions
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Refund Policy
            </a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-[10px] text-[20px] leading-[30px] font-[600] text-primary">
              USEFUL LINKS
            </span>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              About Us
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Shop Products
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              My Cart
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Order Tracking
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Privacy Policy
            </a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-[10px] text-[20px] leading-[30px] font-[600] text-primary">
              Categories
            </span>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Computer & Laptop
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Television & Video
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Headphones
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
              Smartphones
            </a>
            <a className="hover:translate-x-3 transition-transform duration-300 ease-linear cursor-pointer flex items-center gap-2 text-[16px] leading-[32px] text-neutral">
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
                <CiMail />
              </div>{" "}
              info@demo.com
            </div>
            <a className="text-[16px] leading-[32px] text-neutral flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex justify-center items-center bg-primary text-[#031424]">
                <HiLocationMarker />
              </div>{" "}
              4140 Alfred Drive, New York
            </a>
            <a className="text-[16px] leading-[32px] text-neutral flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex justify-center items-center bg-primary text-[#031424]">
                <MdOutlineWatchLater />
              </div>{" "}
              8.00AM - 21.00AM
            </a>
          </div>
        </div>
        <div className="footer pt-7 pb-9 border-t text-base-content border-[rgba(255,255,255,0.40)]">
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
              className="h-10 max-w-[342.77px]"
              alt="payment method"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
