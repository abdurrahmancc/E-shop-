import React from "react";
import Collapsible from "react-collapsible";
import { BsChevronDown } from "react-icons/bs";

const Faq = () => {
  return (
    <div className="lg:py-[120px] py-20 max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
      <h2 className="xl:text-[38px] md:text-[28px] text-[20px] leading-[40px] font-[600] text-center text-[#031424] xl:leading-[57px]">
        Frequently Asked Questions
      </h2>
      <p className="lg:text-[16px] text-sm text-center mx-auto max-w-[752px] lg:leading-[30px] leading-[24px] lg:mt-6 md:mt-3 mt-2 text-[#424242]">
        Lorem ipsum dolor sit amet consectetur. Id amet ornare eu duis. Fermentum orci tortor nec
        mauris cras aliquam mauris. Scelerisque quis montes.
      </p>
      <div className="lg:mt-20 mt-10">
        <div id="faq-Collapsible" className="max-w-[1100px] mx-auto">
          <div className="bg-[#ffffff] box-border border hover:border-primary">
            <Collapsible
              className="w-full"
              open={true}
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-[#031424] p-5 leading-6 font-[500]">
                  1. Lorem ipsum dolor sit amet?
                  <BsChevronDown key={"faq-trigger-1"} className="text-[12px] text-[#1C2436] " />
                </span>
              }
            >
              <div className="p-5 lg:text-[16px] text-sm text-[#031424] lg:leading-[28px] leading-[22px] border-t border-[#DBDBDB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam velit
                ipsum assumenda perferendis eveniet aspernatur, quaerat officiis reprehenderit
                optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum eum pariatur
                consectetur laboriosam odit accusantium quisquam sequi nostrum dolores. Labore enim
                blanditiis obcaecati ullam sint est vero nihil quisquam!
              </div>
            </Collapsible>
          </div>
          <div className="bg-[#ffffff] box-border mt-[30px] border hover:border-primary">
            <Collapsible
              className="w-full"
              open={false}
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-[#031424] p-5 leading-6 font-[500]">
                  2. Lorem ipsum dolor sit amet ?
                  <BsChevronDown key={"faq-trigger-2"} className="text-[12px] text-[#1C2436] " />
                </span>
              }
            >
              <div className="p-5 lg:text-[16px] text-sm text-[#031424] lg:leading-[28px] leading-[22px] border-t border-[#DBDBDB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam velit
                ipsum assumenda perferendis eveniet aspernatur, quaerat officiis reprehenderit
                optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum eum pariatur
                consectetur laboriosam odit accusantium quisquam sequi nostrum dolores. Labore enim
                blanditiis obcaecati ullam sint est vero nihil quisquam!
              </div>
            </Collapsible>
          </div>
          <div className="bg-[#ffffff] box-border mt-[30px] border hover:border-primary">
            <Collapsible
              className="w-full"
              open={false}
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-[#031424] p-5 leading-6 font-[500]">
                  3. Lorem ipsum dolor sit amet ?
                  <BsChevronDown key={"faq-trigger-3"} className="text-[12px] text-[#1C2436] " />
                </span>
              }
            >
              <div className="p-5 lg:text-[16px] text-sm text-[#031424] lg:leading-[28px] leading-[22px] border-t border-[#DBDBDB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam velit
                ipsum assumenda perferendis eveniet aspernatur, quaerat officiis reprehenderit
                optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum eum pariatur
                consectetur laboriosam odit accusantium quisquam sequi nostrum dolores. Labore enim
                blanditiis obcaecati ullam sint est vero nihil quisquam!
              </div>
            </Collapsible>
          </div>
          <div className="bg-[#ffffff] box-border mt-[30px] border hover:border-primary">
            <Collapsible
              className="w-full"
              open={false}
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-[#031424] p-5 leading-6 font-[500]">
                  4. Lorem ipsum dolor sit amet ?
                  <BsChevronDown key={"faq-trigger-4"} className="text-[12px] text-[#1C2436] " />
                </span>
              }
            >
              <div className="p-5 lg:text-[16px] text-sm text-[#031424] lg:leading-[28px] leading-[22px] border-t border-[#DBDBDB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam velit
                ipsum assumenda perferendis eveniet aspernatur, quaerat officiis reprehenderit
                optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum eum pariatur
                consectetur laboriosam odit accusantium quisquam sequi nostrum dolores. Labore enim
                blanditiis obcaecati ullam sint est vero nihil quisquam!
              </div>
            </Collapsible>
          </div>
          <div className="bg-[#ffffff] box-border mt-[30px] border hover:border-primary">
            <Collapsible
              className="w-full"
              open={false}
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-[#031424] p-5 leading-6 font-[500]">
                  5. Lorem ipsum dolor sit amet ?
                  <BsChevronDown key={"faq-trigger-5"} className="text-[12px] text-[#1C2436] " />
                </span>
              }
            >
              <div className="p-5 lg:text-[16px] text-sm text-[#031424] lg:leading-[28px] leading-[22px] border-t border-[#DBDBDB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam velit
                ipsum assumenda perferendis eveniet aspernatur, quaerat officiis reprehenderit
                optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum eum pariatur
                consectetur laboriosam odit accusantium quisquam sequi nostrum dolores. Labore enim
                blanditiis obcaecati ullam sint est vero nihil quisquam!
              </div>
            </Collapsible>
          </div>
          <div className="bg-[#ffffff] box-border mt-[30px] border hover:border-primary">
            <Collapsible
              className="w-full"
              open={false}
              trigger={
                <span className="lg:text-[18px] text-[16px] flex items-center justify-between text-[#031424] p-5 leading-6 font-[500]">
                  6. Lorem ipsum dolor sit amet ?
                  <BsChevronDown key={"faq-trigger-6"} className="text-[12px] text-[#1C2436] " />
                </span>
              }
            >
              <div className="p-5 lg:text-[16px] text-sm text-[#031424] lg:leading-[28px] leading-[22px] border-t border-[#DBDBDB]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit ea ullam velit
                ipsum assumenda perferendis eveniet aspernatur, quaerat officiis reprehenderit
                optio! Ullam velit hic, aliquam, repudiandae vitae voluptas rerum eum pariatur
                consectetur laboriosam odit accusantium quisquam sequi nostrum dolores. Labore enim
                blanditiis obcaecati ullam sint est vero nihil quisquam!
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
