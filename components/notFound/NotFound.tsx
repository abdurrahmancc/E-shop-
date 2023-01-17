import Image from "next/image";
import React from "react";
import img from "../../assets//bg/404.png";

const NotFound = () => {
  return (
    <div>
      <Image src={img} width={1039} height={625} className="mx-auto" alt={"not found image"} />
      <div className="mt-[50px] text-center">
        <p className="text-[28px] pb-[50px] mx-auto max-w-[800px] leading-[55px] text-[#424242] text-center">
          The page you are looking for is not available or doesn’t belong to this website!
        </p>

        <button
          onClick={() => window.history.back()}
          className="text-[#000000] duration-300 transition-all ease-in-out flex items-center gap-3 bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate bg-primary rounded-[44px] font-[500] uppercase py-4 mx-auto text-center text-lg px-8"
        >
          Return to back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
