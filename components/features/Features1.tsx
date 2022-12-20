import Image from "next/image";
import React from "react";
import shipping from "../../assets/icons/freeShipping.svg";
import moneyBack from "../../assets/icons/moneyBack.svg";
import payment from "../../assets/icons/payment.svg";
import customerSupport from "../../assets/icons/customerSupport.svg";

const Features1 = () => {
  return (
    <>
      <div className="py-[37px] bg-secondary ">
        <div className="max-w-[260px] sm:max-w-[520px] lg:max-w-full mx-auto">
          <div className="grid w-full lg:grid-cols-4 sm:grid-cols-2 gap-10 lg:gap-0">
            <div className="flex lg:justify-center w-full lg:border-r-[0.5px] border-gray-300">
              <div className="flex items-center gap-[15px]">
                <Image
                  src={customerSupport}
                  width={35.68}
                  height={35.94}
                  alt="free shipping"
                  className="xl:w-[35.68px] xl:h-[35.94px] w-[28px] h-[28px]"
                />
                <h4 className="text-neutral capitalize text-[16px] xl:text-[20px] leading-[30.81px] font-[500]">
                  customer support
                </h4>
              </div>
            </div>
            <div className="flex lg:justify-center w-full lg:border-r-[0.5px] border-gray-300">
              <div className="flex items-center gap-[15px]">
                <Image
                  src={moneyBack}
                  width={35.68}
                  height={35.94}
                  alt="free shipping"
                  className="xl:w-[35.68px] xl:h-[35.94] w-[28px] h-[28px]"
                />
                <h4 className="text-neutral capitalize text-[16px] xl:text-[20px] leading-[30.81px] font-[500]">
                  money back guarantee
                </h4>
              </div>
            </div>
            <div className="flex lg:justify-center w-full lg:border-r-[0.5px] border-gray-300">
              <div className="flex items-center gap-[15px]">
                <Image
                  src={shipping}
                  width={35.68}
                  height={35.94}
                  alt="free shipping"
                  className="xl:w-[35.68px] xl:h-[35.94] w-[28px] h-[28px]"
                />
                <h4 className="text-neutral capitalize text-[16px] xl:text-[20px] leading-[30.81px] font-[500]">
                  Free Shipping
                </h4>
              </div>
            </div>
            <div className="flex lg:justify-center w-full">
              <div className="flex items-center gap-[15px]">
                <Image
                  src={payment}
                  width={35.68}
                  height={35.94}
                  alt="free shipping"
                  className="xl:w-[35.68px] xl:h-[35.94] w-[28px] h-[28px]"
                />
                <h4 className="text-neutral capitalize text-[16px] xl:text-[20px] leading-[30.81px] font-[500]">
                  Secure Payment
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features1;
