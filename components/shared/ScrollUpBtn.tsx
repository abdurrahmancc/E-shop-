import React, { useState, useEffect } from "react";
import { HiOutlineArrowUp } from "react-icons/hi2";

const ScrollUpBtn = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      <button
        className="cursor-pointer z-[10000] border-2 border-primary fixed xl:h-[48px] rounded-full xl:w-[48px] w-[32px] h-[32px] bottom-8 right-3  sm:right-7 2xl:right-[64px] text-[16px] xl:text-[24px]"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <HiOutlineArrowUp className="text-primary mx-auto" />
      </button>
    </>
  );
};

export default ScrollUpBtn;
