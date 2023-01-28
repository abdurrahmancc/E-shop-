import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { SiMinutemailer } from "react-icons/si";
import { TiArrowSortedUp } from "react-icons/ti";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/app/reduxHooks";
import { addToCompare } from "../../redux/features/compare/compareSlice";
import { addToCart } from "../../redux/features/shoppingCart/shoppingCartSlice";
import { addToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { ProductModel } from "../../types/types";
import { Rating5 } from "../shared/Ratings/Ratings";

interface Product {
  product: ProductModel;
}

const TopProductDetails = ({ product }: Product) => {
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();
  const isDetailsPage = router.pathname.includes("product-details");
  const dispatch = useAppDispatch();

  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Add To cart", { autoClose: 1000 });
  };
  const handleAddToCompare = (id: string) => {
    dispatch(addToCompare(id));
    toast.success("Add To compare", { autoClose: 1000 });
  };

  const handleAddToWishlist = (id: string) => {
    dispatch(addToWishlist(id));
    toast.success("Add To wishlist", { autoClose: 1000 });
  };

  const handleQuantity = (data: number): void => {
    if (data < 1) return;
    setQuantity(data);
  };

  return (
    <div id="top-Product-Details" className={`${isDetailsPage ? "pt-7" : ""}`}>
      <div
        className={`text-[16px] flex justify-center items-center w-[86px] h-[36px] bg-[#F0F9F4] text-[#00A046] rounded-[6px] leading-[24px]`}
      >
        {product?.status}
      </div>
      <h4
        className={`text-info my-3 font-[600] ${
          isDetailsPage
            ? "2xl:text-[42px] 2xl:leading-[63px] xl:text-[32px] sm:text-[28px] text-[20px] xl:leading-[48px] leading-[36px]"
            : "2x:text-[38px] 2xl:leading-[57px] text-[24px] leading-8"
        }`}
      >
        {product?.name}
      </h4>
      <div className="flex gap-[8px] flex-col sm:flex-row sm:items-center">
        <div className="flex sm:justify-center sm:items-center gap-[8px]">
          <div className="flex gap-[2px] items-center justify-center">
            <Rating5 />
          </div>
          <span className="text-[16px] text-[#6A6A6A] leading-[24px]">({product?.review})</span>
        </div>
        <div className="w-[1px] h-4 bg-[#B9B9B9] hidden sm:block"></div>
        <div className="flex gap-[8px] items-center">
          <span className="sm:text-[16px] text-sm leading-[24px] text-[#6A6A6A]">
            Model: {product?.model}
          </span>{" "}
          <div className="w-[1px] h-4 bg-[#B9B9B9]"></div>
          <span className="sm:text-[16px] text-sm leading-[24px] text-[#6A6A6A]">
            SKU: {product?.SKU}
          </span>
        </div>
      </div>
      <p
        className={`2xl:text-[42px] 2xl:leading-[63px] text-primary ${
          isDetailsPage
            ? "xl:text-[32px] sm:text-[28px] text-[20px] sm:my-6 my-4 font-[600] xl:leading-[48px] leading-9"
            : "xl:text-[24px] sm:text-[28px] text-[20px] 2xl:my-6 my-2 font-[600] xl:leading-[48px] leading-8"
        }`}
      >
        ${product?.price.toFixed(2)}
      </p>
      <div>
        <ul className="flex flex-col gap-2">
          {product &&
            product?.shortFeatures.map((feature, i) => {
              return (
                <li key={i} className={"flex gap-2"}>
                  <TiArrowSortedUp className="text-info sm:text-[24px] text-[20px] rotate-90" />
                  <span className="text-[#424242] sm:text-[16px] text-sm leading-[24px] ">
                    {feature}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="flex my-6 gap-x-3 sm:gap-x-5">
        <div
          className={`cart-quantity-frame ${
            isDetailsPage
              ? "flex xl:w-[161px] w-[130px] sm:min-w-[130px] px-[21px] justify-between items-center xl:h-[64px] h-[52px] border border-[#D9D9D9] rounded-[44px] "
              : "flex 2xl:w-[161px] w-[130px] sm:min-w-[130px] px-[21px] justify-between items-center 2xl:h-[64px] h-[52px] border border-[#D9D9D9] rounded-[44px] "
          }`}
        >
          <button onClick={() => handleQuantity(quantity - 1)}>
            <AiOutlineMinus className="text-[18px] text-[#3E3E3E] " />
          </button>
          <div>{quantity < 10 ? `0${quantity}` : quantity}</div>
          <button onClick={() => handleQuantity(quantity + 1)}>
            <AiOutlinePlus className="text-[18px] text-[#3E3E3E] " />
          </button>
        </div>
        <ul className="flex sm:gap-[16px] gap-2 items-center">
          <li>
            <button
              onClick={() => handleAddToCart(product?._id)}
              className={`bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate bg-primary product-details-shopping-cart
              ${
                isDetailsPage
                  ? "text-[#000000] xl:h-[64px] h-[52px] rounded-[32px] 2xl:w-[281px] xl:w-[220px] sm:w-[180px] w-[140px]  xl:text-[24px] sm:text-[20px] text-[18px] leading-[36px]"
                  : "text-[#000000] 2xl:h-[64px] h-[52px] rounded-[32px] 2xl:w-[281px] xl:w-[180px] sm:w-[180px] w-[140px]  2xl:text-[24px] hidden sm:block sm:text-[20px] text-[18px] leading-[36px]"
              }`}
            >
              <span>Add to cart</span>
              <HiOutlineShoppingBag className="hidden text-[24px] mx-auto" />
            </button>
          </li>
          {!isDetailsPage && (
            <li
              onClick={() => handleAddToCart(product?._id)}
              className={`cursor-pointer sm:hidden transition-all duration-300 ease-linear text-[#031424] hover:bg-primary rounded-full ${
                isDetailsPage
                  ? "xl:w-16 w-[52px] xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]"
                  : "2xl:w-16 w-[52px]  2xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]"
              }`}
            >
              <HiOutlineShoppingBag
                className={`${
                  isDetailsPage ? "xl:text-[32px] text-[24px]" : "2xl:text-[32px] text-[24px]"
                }`}
              />
            </li>
          )}
          <li
            onClick={() => handleAddToWishlist(product?._id)}
            className={`cursor-pointer transition-all duration-300 ease-linear text-[#031424] hover:bg-primary rounded-full ${
              isDetailsPage
                ? "xl:w-16 w-[52px] xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]"
                : "2xl:w-16 w-[52px]  2xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]"
            }`}
          >
            <AiOutlineHeart
              className={`${
                isDetailsPage ? "xl:text-[32px] text-[24px]" : "2xl:text-[32px] text-[24px]"
              }`}
            />
          </li>
          <li
            onClick={() => handleAddToCompare(product?._id)}
            className={`cursor-pointer transition-all duration-300 ease-linear text-[#031424] hover:bg-primary rounded-full ${
              isDetailsPage
                ? "xl:w-16 w-[52px] xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]"
                : "2xl:w-16 w-[52px]  2xl:h-16 h-[52px] flex items-center justify-center bg-[#F1F1F1]"
            }`}
          >
            <BiGitCompare
              className={`rotate-90 ${
                isDetailsPage ? "xl:text-[32px] text-[24px]" : "2xl:text-[32px] text-[24px]"
              }`}
            />
          </li>
        </ul>
      </div>
      <div className="flex sm:mb-6 mb-3 gap-2 items-center">
        <span
          className={`${
            isDetailsPage
              ? "text-[#031424] sm:text-[16px] text-sm font-[500] leading-[24px]"
              : "text-[#031424] sm:text-[16px] text-[13px] font-[500] leading-[24px]"
          }`}
        >
          2-day Delivery
        </span>
        <div className="w-[1px] h-4 bg-[#B9B9B9]"></div>
        <span
          className={`${
            isDetailsPage
              ? "text-[#6A6A6A] sm:text-[16px] text-sm leading-[24px]"
              : "text-[#6A6A6A] sm:text-[16px] text-[13px] leading-[24px]"
          }`}
        >
          Speedy and reliable parcel delivery!
        </span>
      </div>
      {isDetailsPage && (
        <span className="text-[#6A6A6A] sm:text-[16px] text-sm leading-[24px]">
          Tag: Apple iMac, Apple PC, Apple Desktop
        </span>
      )}
      <div className="mt-6">
        <div className="flex sm:gap-[16px] gap-2">
          <div className="bg-[#3B5998] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <FaFacebookF className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
          <div className="bg-[#1DA1F2] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <BsTwitter className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
          <div className="bg-[#E60023] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <BsInstagram className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
          <div className="bg-[#0077B5] cursor-pointer flex justify-center items-center rounded-[32.86px] sm:w-[43px] w-8 sm:h-[43px] h-8">
            <SiMinutemailer className="text-[#ffffff] sm:text-[20px] text-[16px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductDetails;
