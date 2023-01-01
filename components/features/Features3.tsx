import Image from "next/image";
import React from "react";
import shipping from "../../assets/icons/freeShipping3.png";
import gift from "../../assets/icons/gift.png";
import payment from "../../assets/icons/pay3.png";
import customerSupport from "../../assets/icons/customerSupport3.png";

const Features3 = () => {
  return (
    <>
      <div className="py-[48px] rounded-[8px] bg-[#F8F8F8] ">
        <div className="max-w-[320px] sm:max-w-[680px] lg:px-5 lg:max-w-full mx-auto">
          <div className="grid w-full lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-10 lg:gap-x-0 gap-y-10">
            <div className="flex xl:justify-center w-full">
              <div className="flex items-center gap-[20px]">
                <Image
                  src={shipping}
                  width={48}
                  height={48}
                  alt="Fast Shipping"
                  className="2xl:w-[48px] 2xl:h-[48px] xl:w-[28px] xl:h-[28px] w-[48px] h-[48px]"
                />
                <div>
                  <h4 className="text-[#031424] capitalize text-[18px] xl:text-[16px] 2xl:text-[18px] leading-[27px] font-[600]">
                    Fast Shipping
                  </h4>
                  <p className="xl:text-[12px] text-[14px] 2xl:text-[14px] mt-1 leading-[21px] text-[#505050]">
                    Free delivery for order over $200
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-center w-full">
              <div className="flex items-center gap-[20px]">
                <Image
                  src={gift}
                  width={48}
                  height={48}
                  alt="Gift Voucher"
                  className="2xl:w-[48px] 2xl:h-[48px] xl:w-[28px] xl:h-[28px] w-[48px] h-[48px]"
                />
                <div>
                  <h4 className="text-[#031424] capitalize text-[18px] xl:text-[16px] 2xl:text-[18px] leading-[27px] font-[600]">
                    Gift Voucher
                  </h4>
                  <p className="xl:text-[12px] text-[14px] 2xl:text-[14px] mt-1 leading-[21px] text-[#505050]">
                    Refer a friend & get a surprise gifts.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-center w-full">
              <div className="flex items-center gap-[20px]">
                <Image
                  src={customerSupport}
                  width={48}
                  height={48}
                  alt="customer Support"
                  className="2xl:w-[48px] 2xl:h-[48px] xl:w-[28px] xl:h-[28px] w-[48px] h-[48px]"
                />
                <div>
                  <h4 className="text-[#031424] capitalize text-[18px] xl:text-[16px] 2xl:text-[18px] leading-[27px] font-[600]">
                    customer support
                  </h4>
                  <p className="xl:text-[12px] text-[14px] 2xl:text-[14px] mt-1 leading-[21px] text-[#505050]">
                    Feel free to call & get best support
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:justify-center w-full">
              <div className="flex items-center gap-[20px]">
                <Image
                  src={payment}
                  width={48}
                  height={48}
                  alt="free shipping"
                  className="2xl:w-[48px] 2xl:h-[48px] xl:w-[28px] xl:h-[28px] w-[48px] h-[48px]"
                />
                <div>
                  <h4 className="text-[#031424] capitalize text-[18px] xl:text-[16px] 2xl:text-[18px] leading-[27px] font-[600]">
                    Secure Payment
                  </h4>
                  <p className="xl:text-[12px] text-[14px] 2xl:text-[14px] mt-1 leading-[21px] text-[#505050]">
                    Safe & more secure way to pay online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features3;
