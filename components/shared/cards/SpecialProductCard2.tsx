import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import watch from "../../../assets/product-Image/product-4.png";

const SpecialProductCard2 = () => {
  const router = useRouter();
  return (
    <div className=" flex justify-center items-center h-full">
      <div className="max-w-[409px] h-[634px] mx-auto flex flex-col justify-between">
        <div className=" text-center">
          <h2 className="text-[20px] font-[500] leading-[30px] text-center text-info">
            Apple watch
          </h2>
          <p className="text-[#313131] mb-7 mt-3 text-center text-[34px] leading-[41px] font-[600]">
            <span className="text-primary ">Watches</span> out for your heart health.
          </p>
          <button
            onClick={() => router.push("/shop/product-details/4")}
            className="text-[16px] mx-auto rounded-[30px] w-[123px] flex justify-center items-center h-[46px] leading-6 font-[500] text-neutral bg-info bg-gradient-to-r from-[#027aea] to-[#2387e5] btn-animate "
          >
            Shop now
          </button>
        </div>
        <Link href={"/shop/product-details/4"}>
          <figure>
            <Image
              src={watch}
              width={400}
              height={400}
              className="mx-auto "
              alt="special offer product"
            />
          </figure>
        </Link>
      </div>
    </div>
  );
};

export default SpecialProductCard2;
