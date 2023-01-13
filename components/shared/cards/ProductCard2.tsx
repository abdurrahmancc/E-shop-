import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare, BiSearch } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Rating5 } from "../Ratings/Ratings";
import { ProductModel } from "../../../types/types";
import { useAppDispatch } from "../../../redux/app/reduxHooks";
import { addToCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { toast } from "react-toastify";
import { addToCompare } from "../../../redux/features/compare/compareSlice";
import { addToWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { useRouter } from "next/router";
import QuickView from "../../modals/QuickView";
import Link from "next/link";

type PropsData = {
  product: ProductModel;
};

const ProductCard2 = ({ product }: PropsData) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const router = useRouter();
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

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="max-w-[264px] mx-auto overflow-hidden w-full h-[373px]"
    >
      <div className="border overflow-hidden rounded-[8px] relative h-full border-[#EDEDED]">
        <div
          className={`w-full flex justify-center transition-all duration-[0.3s] ease-out items-center h-[274px] rounded-t-[8px] bg-[#F8F8F8] ${
            isHover ? "h-[228px]" : ""
          }`}
        >
          <Link href={`/shop/product-details/${product?._id}`}>
            <figure className="max-w-[212px] max-h-[212px] overflow-hidden">
              {isHover ? (
                <Image
                  src={product?.img[0]}
                  className={`transition-all duration-300 ease-linear scale-100 ${
                    isHover ? "scale-110" : ""
                  }`}
                  width={212}
                  height={212}
                  alt="product image"
                />
              ) : (
                <Image
                  className={`transition-all duration-300 ease-linear scale-100 ${
                    isHover ? "scale-110" : ""
                  }`}
                  src={product?.img[1]}
                  width={212}
                  height={212}
                  alt="product image"
                />
              )}
            </figure>
          </Link>
        </div>
        <div className="p-4">
          <h3 className="text-[14px] leading-[21px] font-[600] text-info ">
            <Link href={`/shop/product-details/${product?._id}`}>{product?.name}</Link>
          </h3>
          <div className={`flex justify-between`}>
            <div className="flex justify-center items-center gap-[4px]">
              <div className="flex gap-[2px] items-center justify-center">
                <Rating5 />
              </div>
              <span className="text-[14px] text-[#808080] leading-[21px]">
                ({product?.reviewQuantity})
              </span>
            </div>
            <p className="text-[16px] mt-[5px] leading-6 font-[500] text-[#FD8D03] text-center">
              ${product?.price}
            </p>
          </div>
        </div>
        <div className={`absolute w-full bottomToTop ${isHover ? "bottomToTopAnimate" : ""} `}>
          <div className="bg-[#F8F8F8] h-[52px] w-full">
            <ul className="flex gap-[10px] justify-center h-full items-center">
              <li className="w-[27.03px] cursor-pointer h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary">
                <label
                  htmlFor="quick-view"
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                  <BiSearch className="text-[13px] " />
                </label>
              </li>
              <li
                onClick={() => handleAddToWishlist(product?._id)}
                className="w-[27.03px] cursor-pointer h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary"
              >
                <AiOutlineHeart className="text-[13px]" />
              </li>
              <li
                onClick={() => handleAddToCart(product?._id)}
                className="w-[27.03px] cursor-pointer h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary"
              >
                <BiGitCompare className="rotate-90 text-[13px]" />
              </li>
              <li
                onClick={() => handleAddToCart(product?._id)}
                className="w-[27.03px] cursor-pointer h-[27.03px] transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full flex items-center justify-center border border-primary"
              >
                <HiOutlineShoppingBag className="text-[13px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <QuickView product={product} />
    </div>
  );
};

export default ProductCard2;
