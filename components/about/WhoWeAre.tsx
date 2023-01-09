import Image from "next/image";
import React from "react";
import img1 from "../../assets/users/about-1.png";
import img2 from "../../assets/users/about-2.png";
import img3 from "../../assets/users/about-3.png";
import bg from "../../assets/bg/about.png";

const WhoWeAre = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-no-repeat bg-left-bottom  2xl:h-[633px] xl:h-[580px] max-w-[1549px] mx-auto isHidden"
    >
      <div className="max-w-[1443px] container w-full mx-auto px-4 lg:px-10 2xl:px-0">
        <div className="flex xl:items-center xl:gap-[50px] 2xl:gap-[117px] lg:gap-[30px] lg:flex-row flex-col gap-y-10">
          <div className="flex flex-col xl:gap-[30px] lg:gap-[12px] gap-[20px]">
            <div className="flex xl:gap-[30px] lg:gap-[12px] gap-[20px]">
              <Image
                src={img1}
                alt="users"
                className="2xl:w-[337px] xl:w-[310px] lg:w-[230px] md:w-[337px] w-full"
                width={337}
                height={337}
              />
              <Image
                src={img2}
                alt="users"
                className="2xl:w-[337px] xl:w-[310px] lg:w-[230px] md:w-[337px] w-full"
                width={337}
                height={337}
              />
            </div>
            <Image
              src={img3}
              alt="users"
              className="2xl:w-[705px] xl:w-[650px] xl:min-w-[650px] 2xl:min-w-[705px] lg:w-[412px] lg:min-w-[472px] md:w-[695px] md:min-w-[695px] w-full"
              width={705}
              height={272}
            />
          </div>
          <div>
            <h2 className="xl:text-[45px] lg:text-[32px] xl:leading-[67px] lg:leading-[48px] font-[600] text-[#031424] text-[36px] leading-[52px]">
              Who We <span className="text-primary">Are?</span>
            </h2>
            <p className="xl:mt-[30px] mt-3 xl:mb-10 mb-5 max-w-[618px] leading-[28px] xl:text-[16px] text-[15px] text-[#424242]">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper mi neque varius aliquam proin.
              Faucibus pretium condimentum placerat nulla lorem. Quis et orci vestibulum enim nulla
              tempus nunc. Risus egestas lorem ultrices viverra ultrices etiam. Imperdiet nec
              commodo sed lectus leo donec.
              <br />
              <br />
              Sed maecenas accumsan elit id cras massa sem dignissim. Enim ut at quam aliquet
              sapien. Lacus semper imperdiet aliquam cursus etiam semper nibh. Tempor nibh lacus
              egestas sit egestas aliquet ipsum. Tellus vulputate massa id integer quis sapien
              mattis. Auctor netus vel sollicitudin et aenean in.{" "}
            </p>
            <button className="max-w-[174px] hover:bg-[#fcb900f6] rounded-[8px] bg-primary font-[500] w-full h-[54px] text-[#031424] leading-[24px]">
              More Read Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
