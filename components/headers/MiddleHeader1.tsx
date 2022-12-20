import Image from "next/image";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from "../../assets/icons/logo.png";
import { searchCategorySelected } from "../../styles/selectComponents";
import Link from "next/link";
import compareIcon from "../../assets/icons/compare.svg";
import wishlistIcon from "../../assets/icons/wishlist.svg";
import cartIcon from "../../assets/icons/cart.svg";
import DrawerSidebar from "../shared/drawerSidebar";

interface Option {
  value: string;
  label: string;
}

type FromData = {
  searchItems: string;
};

const options: Option[] = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const MiddleHeader1 = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromData>();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <div className="py-5 flex w-full justify-between">
      {/* <div className="text-[40px] text-white  font-semibold leading-[60px] "></div> */}
      <div>
        <Image src={logo} width={150} height={50} alt="logo" />
      </div>
      {/*========= category search from start =========-*/}
      <div className="h-full hidden w-full lg:block">
        <form onSubmit={onSubmit} className="flex justify-center w-full h-full relative">
          <div className="pl-[17px] border border-primary max-w-[550px] xl:max-w-[750px] w-full h-[58px] flex items-center bg-white rounded-[35px]">
            <Select
              id="category-select-component"
              instanceId="category-select-component"
              styles={searchCategorySelected}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              placeholder={"Categories"}
              isSearchable={false}
              options={options}
            />
            <div className="h-[26px] w-[2px] bg-[#AEAEAE]"></div>
            <input
              placeholder="Enter your search key....."
              type="text"
              className="input pl-[22px] leading-[26px] text-black text-sm placeholder:text-[#616161] bg-inherit focus:outline-none h-full w-full"
            />
            <button className="max-w-[109px] w-full bg-primary flex justify-center items-center rounded-r-[35px] h-full">
              <BiSearch className="w-[30px] h-[30px]" />
            </button>
          </div>
        </form>
      </div>
      {/*========= category search from end =========-*/}
      {/* ========= for mobile toggle start ========= */}
      <div
        className="lg:hidden flex items-center cursor-pointer"
        id="navToggle2"
        onClick={() => setToggle(!toggle)}
      >
        <VscThreeBars className="text-3xl text-white" />
      </div>
      {/* ========= for mobile toggle end ========= */}
      {/* ========= compare wishlist cart start ========= */}
      <div className="lg:block  hidden ">
        <ul className="flex items-center gap-5">
          <li>
            <div className="flex items-center gap-2">
              <div className="indicator">
                <Link href={"/wishlist"} className="  rounded-full" aria-label="shopping cart">
                  <Image src={compareIcon} alt="compare" />
                </Link>
                <div className="flex justify-center items-center p-1 h-[22px] w-[21px] rounded-full bg-primary  text-[#031424] cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]">
                  <span className="text-xs">{4}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-2">
              <div className="indicator">
                <Link href={"/wishlist"} className="  rounded-full" aria-label="shopping cart">
                  <AiOutlineHeart className="text-white w-[34px] h-[34px]" />
                </Link>
                <div className="flex justify-center items-center p-1 h-[22px] w-[21px] rounded-full bg-primary  text-[#031424] cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]">
                  <span className="text-xs">{4}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-[18px]">
              <div className="indicator">
                <Link href={"/shoppingCart"} className="  rounded-full" aria-label="shopping cart">
                  <HiOutlineShoppingBag className="text-white w-[34px] h-[34px]" />
                </Link>
                <div className="flex justify-center items-center p-1 h-[22px] w-[21px] rounded-full bg-primary  text-[#031424] cursor-pointer indicator-item top-1 right-1 text-[0.6875rem]">
                  <span className="text-xs">{4}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-neutral leading-[22px] text-xs">Total</span>
                <span className="text-neutral font-[500] text-[16px] leading-[22px]">$4580</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* ========= compare wishlist cart end ========= */}
      <DrawerSidebar toggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default MiddleHeader1;