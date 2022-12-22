import Image from "next/image";
import React from "react";
import bg from "../../../assets/bg/footer-1.png";
import payment from "../../../assets/icons/payment.png";

const Footer1 = () => {
  const year = new Date().getFullYear();
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={"bg-secondary bg-cover bg-no-repeat"}
    >
      <div className="pt-[88px] max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="footer pb-[71px] text-base-content">
          <div className="">
            <span className="footer-title opacity-100 mb-1 text-[24px] leading-[36px] font-[600] text-primary">
              CUSTOMER SERVICE
            </span>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Contact us</a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Payments & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Shipping & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Terms and conditions
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Refund Policy</a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-1 text-[24px] leading-[36px] font-[600] text-primary">
              CUSTOMER SERVICE
            </span>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Contact us</a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Payments & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Shipping & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Terms and conditions
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Refund Policy</a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-1 text-[24px] leading-[36px] font-[600] text-primary">
              CUSTOMER SERVICE
            </span>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Contact us</a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Payments & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Shipping & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Terms and conditions
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Refund Policy</a>
          </div>
          <div className="">
            <span className="footer-title opacity-100 mb-1 text-[24px] leading-[36px] font-[600] text-primary">
              CUSTOMER SERVICE
            </span>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Contact us</a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Payments & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Shipping & Returns
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">
              Terms and conditions
            </a>
            <a className="link link-hover text-[20px] leading-[32px] text-neutral">Refund Policy</a>
          </div>
        </div>
        <div className="footer py-5 border-t text-base-content border-[#BFBFBF]">
          <div className="items-center grid-flow-col">
            <p className="text-[20px] text-neutral leading-[29px]">
              Copyright &copy; {year}. All rights reserved
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <Image
              src={payment}
              width={480}
              height={40}
              className="h-10 max-w-[500]"
              alt="payment method"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
