import Image from "next/image";
import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import { BlogsModel } from "../../../types/types";

type BlogType = {
  blog: BlogsModel;
};

const TopBlogDetails = ({ blog }: BlogType) => {
  return (
    <div>
      <figure>
        <Image src={blog?.img} width={1146} height={662} alt="Blogs" />
      </figure>
      <div className="mt-[30px]">
        <h2 className="text-[36px] text-[#374043] leading-[54px] font-[600] ">{blog?.title}</h2>
        <div className="mt-2 flex items-center  gap-3">
          <div className="flex xl:gap-2 gap-1 items-center">
            <CiUser className="text-[16px] text-info" />
            <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">{blog?.author}</span>
          </div>
          <div className="flex xl:gap-2 gap-1 items-center">
            <CgCalendarDates className="text-[16px] text-info" />
            <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">{blog?.date}</span>
          </div>
          <div className="flex xl:gap-2 gap-1 items-center">
            <TiMessages className="text-[16px] text-info" />
            <span className="xl:text-[16px] text-xs leading-6 text-[#585858]">
              {blog?.commentsQuantity} Comments
            </span>
          </div>
        </div>
        <div className="my-[30px]">
          <p className="lg:text-[16px] text-[14px] leading-[22px] lg:leading-[30px] text-[#5E5E5E]">
            Lorem ipsum dolor sit amet consectetur. Risus nec massa adipiscing rutrum in nunc
            tortor. Sed eget lacus amet aliquam. Mauris tortor arcu consequat diam commodo nulla.
            Turpis in pharetra a in potenti. Massa ullamcorper sed urna tempor adipiscing mauris
            mauris. Vestibulum nisl scelerisque mi velit tellus ut. Adipiscing bibendum et
            adipiscing sollicitudin velit. Sollicitudin arcu cum rhoncus senectus. Leo non mauris
            tincidunt pharetra neque. Neque vulputate et nam duis in id.
          </p>
          <blockquote className="lg:ml-20 ml-10 my-[30px] ">
            <p className="py-[17px] px-[23px] border-l-[9px] bg-[#F0F0F0] border-primary lg:text-[16px] text-[14px] leading-[22px] lg:leading-[30px] text-[#5E5E5E]">
              <em>
                Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis
                ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus.
                Quisque egestas lorem ut mauris ultrices, vitae sollicitudin quam facilisis. Vivamus
                rutrum urna non ligula tempor aliquet. Fusce tincidunt est magna, id malesuada massa
                imperdiet ut. Nunc non n
              </em>
            </p>
          </blockquote>
          <p className="lg:text-[16px] text-[14px] leading-[22px] lg:leading-[30px] text-[#5E5E5E]">
            Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor tortor iaculis.
            Vivamus aliquet ipsum purus, vel auctor felis interdum at. Praesent quis fringilla
            justo. Ut non dui at mi laoreet gravida vitae eu elit. Aliquam in elit eget purus
            scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et vulputate in, aliquam
            sit amet metus. Donec mauris eros, aliquet in nibh quis, semper suscipit nunc. Phasellus
            ornare nibh vitae dapibus tempor.
            <br />
            <br />
            Aliquam purus enim, fringilla vel nunc imperdiet, consequat ultricies massa. Praesent
            sed turpis sollicitudin, dignissim justo vel, fringilla mi. Vivamus libero leo,
            tincidunt eget lectus rhoncus, finibus interdum neque. Curabitur aliquet dolor purus, id
            molestie purus elementum vitae. Sed quis aliquet eros. Morbi condimentum ornare nibh, et
            tincidunt ante interdum facilisis. Praesent sagittis tortor et felis finibus vestibulum.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dapibus turpis sit
            amet turpis tincidunt, sit amet mollis turpis suscipit. Proin arcu diam, pretium nec
            tempus eu, feugiat non ex.
            <br />
            <br />
            Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor tortor iaculis.
            Vivamus aliquet ipsum purus, vel auctor felis interdum at. Praesent quis fringilla
            justo. Ut non dui at mi laoreet gravida vitae eu elit. Aliquam in elit eget purus
            scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et vulputate in, aliquam
            sit amet metus. Donec mauris eros, aliquet in nibh quis, semper suscipit nunc. Phasellus
            ornare nibh vitae dapibus tempor
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBlogDetails;
