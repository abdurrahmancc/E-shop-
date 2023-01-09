import Image from "next/image";
import React from "react";
import { ImQuotesRight } from "react-icons/im";
import user from "../../../assets/users/user-2.png";
import { Rating5 } from "../Ratings/Ratings";

const ClientsCard1 = () => {
  return (
    <div className="h-[455px]">
      <div
        style={{ boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.06)" }}
        className="max-w-[338px] mx-auto mt-[23px] relative w-full bg-[#FFFFFF] rounded-[10px]"
      >
        <div className="absolute w-full text-center mt-[-23px]">
          <div className="w-[45px] h-[45px] mx-auto flex items-center justify-center rounded-full bg-primary">
            <ImQuotesRight className="text-[20px] text-[#031424]" />
          </div>
        </div>
        <div className="px-7 pt-[37px] text-center pb-[35px]">
          <p className="text-[16px] mb-4 leading-7 text-center text-[#424242]">
            Lorem ipsum dolor sit amet consectetur. Rutrum gravida id sit at purus tellus.
            Pellentesque eu duis risus quis aliquam{" "}
          </p>
          <figure>
            <Image
              width={96}
              height={96}
              className={"rounded-full mx-auto"}
              src={user}
              alt="user"
            />
          </figure>
          <div className="mt-4">
            <h4 className="text-[#031424] text-[23px] font-[600] leading-[34px] text-center">
              Rosie Brown
            </h4>
            <p className="text-[#424242] text-[16px] leading-[28px] py-[2px]">CEO</p>
            <div className="flex items-center justify-center">
              <Rating5 width="w-[20px]" height="h-[20px]" color="text-[#F99D50]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCard1;
