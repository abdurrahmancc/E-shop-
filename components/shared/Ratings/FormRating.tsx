import React, { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";

export const FormRating = () => {
  const [select, setSelect] = useState<number>(0);
  return (
    <>
      <AiTwotoneStar
        onClick={() => setSelect(1)}
        className={`cursor-pointer ${select >= 1 ? "text-[#FD8D03]" : "text-[#CBCBCB]"}`}
      />
      <AiTwotoneStar
        onClick={() => setSelect(2)}
        className={`cursor-pointer  ${select >= 2 ? "text-[#FD8D03]" : "text-[#CBCBCB]"}`}
      />
      <AiTwotoneStar
        onClick={() => setSelect(3)}
        className={`cursor-pointer  ${select >= 3 ? "text-[#FD8D03]" : "text-[#CBCBCB]"}`}
      />
      <AiTwotoneStar
        onClick={() => setSelect(4)}
        className={`cursor-pointer  ${select >= 4 ? "text-[#FD8D03]" : "text-[#CBCBCB]"}`}
      />
      <AiTwotoneStar
        onClick={() => setSelect(5)}
        className={`cursor-pointer  ${select >= 5 ? "text-[#FD8D03]" : "text-[#CBCBCB]"}`}
      />
    </>
  );
};
