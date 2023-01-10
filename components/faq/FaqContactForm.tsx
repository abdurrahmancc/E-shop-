import Image from "next/image";
import React from "react";
import contact from "../../assets/users/contact-1.png";

const FaqContactForm = () => {
  return (
    <div>
      <h2 className="xl:text-[38px] md:text-[28px] text-[20px] leading-[40px] font-[600] text-center text-[#031424] xl:leading-[57px]">
        Contact Us
      </h2>
      <p className="lg:text-[16px] text-sm text-center mx-auto max-w-[752px] lg:leading-[30px] leading-[24px] lg:mt-6 md:mt-3 mt-2 text-[#424242]">
        Lorem ipsum dolor sit amet consectetur. Id amet ornare eu duis. Fermentum orci tortor nec
        mauris cras aliquam mauris. Scelerisque quis montes.
      </p>
      <div className="lg:mt-20 mt-10 gap-x-[30px] gap-y-10 flex lg:flex-row flex-col">
        <form className="lg:order-1 order-2">
          <div className="grid grid-cols-2 gap-5">
            <div className="form-control w-full">
              <label className="label px-0 pt-0">
                <span className="text-[16px] leading-6 font-[500] text-[#545454]">Your Name*</span>
              </label>
              <input
                type="text"
                className="input rounded-none border-[#CBCBCB] bg-inherit h-[56px] focus:outline-none input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label px-0 pt-0">
                <span className="text-[16px] leading-6 font-[500] text-[#545454]">
                  Phone Number*
                </span>
              </label>
              <input
                type="text"
                className="input rounded-none border-[#CBCBCB] bg-inherit h-[56px] focus:outline-none input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mt-5 w-full">
            <label className="label px-0 pt-0">
              <span className="text-[16px] leading-6 font-[500] text-[#545454]">Subject*</span>
            </label>
            <input
              type="text"
              className="input rounded-none border-[#CBCBCB] bg-inherit h-[56px] focus:outline-none input-bordered w-full"
            />
          </div>
          <div className="form-control mt-5 w-full">
            <label className="label px-0 pt-0">
              <span className="text-[16px] leading-6 font-[500] text-[#545454]">
                Email Address*
              </span>
            </label>
            <input
              type="text"
              className="input rounded-none border-[#CBCBCB] bg-inherit h-[56px] focus:outline-none input-bordered w-full"
            />
          </div>
          <div className="form-control mt-5 mb-7 w-full">
            <label className="label px-0 pt-0">
              <span className="text-[16px] leading-6 font-[500] text-[#545454]">Your Message*</span>
            </label>
            <textarea className="textarea h-[132px] rounded-none border-[#CBCBCB] bg-inherit focus:outline-none input-bordered w-full" />
          </div>
          <button className="w-[157px] rounded-[8px] h-[68px] text-[#031424] max-w-[158px] font-[500] bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[20px] leading-[30px] ">
            Submit
          </button>
        </form>
        <figure className="lg:order-2 order-1">
          <Image src={contact} width={705} height={585} alt="contact" />
        </figure>
      </div>
    </div>
  );
};

export default FaqContactForm;
