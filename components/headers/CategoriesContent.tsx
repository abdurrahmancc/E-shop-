import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import computer from "../../assets/icons/computer.svg";
import television from "../../assets/icons/television.svg";
import headphones from "../../assets/icons/headphones.svg";
import phone from "../../assets/icons/phone.svg";
import camera from "../../assets/icons/camera.svg";
import watch from "../../assets/icons/smart-watch.svg";
import controller from "../../assets/icons/controller.svg";
import seller from "../../assets/icons/best-seller.svg";
import discount from "../../assets/icons/discount.svg";
import newProduct from "../../assets/icons/new-product.svg";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CategoriesContent = () => {
  const { pathname } = useRouter();
  const isHome1 = pathname == "/";
  const isHome2 = pathname == "/home/home2";

  return (
    <ul
      className={`category-subMenu-slide ${
        isHome1
          ? "top-[120px] border-x bg-white"
          : isHome2
          ? "top-[105px] bg-[#F8F8F8] rounded-[8px]"
          : "top-20 border-x bg-white"
      } max-w-[292.5px] lg:max-w-[250.5px] xl:max-w-[292.5px] absolute z-[100]`}
    >
      <li
        className={`${
          isHome2 ? "border-b" : "border-y"
        } border-[#D9D9D9]  capitalize pl-[13px] w-full text-start`}
      >
        <div className="dropdown  py-[17.37px] w-full hover:overflow-visible dropdown-right dropdown-hover">
          <label tabIndex={0} className="w-full ">
            <Link href={"/shop"} className={"flex items-center justify-between pr-[13px]"}>
              <span className="flex items-center gap-3">
                <Image alt="computer" src={computer} width={20} className={"w-[20px]"} />
                <span className={`text-[#282828] text-[16px] leading-[22px]`}>
                  Computer & Laptop
                </span>
              </span>
              <IoIosArrowForward className="text-[#424242] text-[16px]" />
            </Link>
          </label>
          <ul
            tabIndex={0}
            id="bottom-dropdown-category"
            className="dropdown-content overflow-hidden text-[#424242] side-dropdown menu shadow bg-white w-52"
          >
            <li className="border-b border-[#D9D9D9] text-[16px] leading-[24px] capitalize">
              <Link href="/" className="pl-8 bg-white ">
                Item 1
              </Link>
            </li>
            <li className="border-[#D9D9D9] text-[16px] leading-[24px] capitalize">
              <Link href="/" className="pl-8 bg-white ">
                Item 2
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li
        className={`
         border-[#D9D9D9] border-b capitalize pl-[13px] w-full text-start`}
      >
        <div className="dropdown  py-[17.37px] w-full hover:overflow-visible dropdown-right dropdown-hover">
          <label tabIndex={0} className="w-full ">
            <Link href={"/shop"} className={"flex items-center justify-between pr-[13px]"}>
              <span className="flex items-center gap-3">
                <Image alt="computer" src={television} width={20} className={"w-[20px]"} />
                <span className={`text-[#282828] text-[16px] leading-[22px]`}>
                  Television & Video
                </span>
              </span>
              <IoIosArrowForward className="text-[#424242] text-[16px]" />
            </Link>
          </label>
          <ul
            tabIndex={0}
            id="bottom-dropdown-category"
            className="dropdown-content overflow-hidden text-[#424242] side-dropdown menu shadow bg-white w-52"
          >
            <li className="border-b border-[#D9D9D9] text-[16px] leading-[24px] capitalize">
              <Link href="/" className="pl-8 bg-white ">
                Item 1
              </Link>
            </li>
            <li className="border-[#D9D9D9] text-[16px] leading-[24px] capitalize">
              <Link href="/" className="pl-8 bg-white ">
                Item 2
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="border-b border-[#D9D9D9]  capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={headphones} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}> Headphones</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9]  capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={phone} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Smartphones</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9]  capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={camera} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Camera & Photos</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9]  capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={watch} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Smart Watch</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9]  capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={controller} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Video Games</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9]  capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={seller} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Best Seller</span>
        </Link>
      </li>
      <li className="border-b border-[#D9D9D9]  capitalize px-[13px] w-full text-start">
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={discount} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>Special Discount</span>
        </Link>
      </li>
      <li
        className={`${
          isHome2 ? "" : "border-b"
        } border-[#D9D9D9]  capitalize px-[13px] w-full text-start`}
      >
        <Link href={"/shop"} className={"py-[17.37px] flex items-center gap-3"}>
          <Image alt="computer" src={newProduct} width={20} className={"w-[20px]"} />
          <span className={`text-[#282828] text-[16px] leading-[22px]`}>New Arrivals</span>
        </Link>
      </li>
    </ul>
  );
};

export default CategoriesContent;
