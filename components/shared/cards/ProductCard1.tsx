import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare, BiSearch } from "react-icons/bi";
import { toast } from "react-toastify";
import img1 from "../../../assets/product-Image/product-1.png";
import img2 from "../../../assets/product-Image/product-2.png";
import { useAppDispatch } from "../../../redux/app/reduxHooks";
import { addToCompare } from "../../../redux/features/compare/compareSlice";
import { addToCart } from "../../../redux/features/shoppingCart/shoppingCartSlice";
import { addToWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { ProductModel } from "../../../types/types";
import QuickView from "../../modals/QuickView";
import { Rating5 } from "../Ratings/Ratings";

type PropsData = {
  product: ProductModel;
};

const ProductCard1 = ({ product }: PropsData) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const router = useRouter();
  const isProductCard3 = router.pathname.includes("home3");
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
      className="max-w-[265px] mx-auto overflow-hidden w-full h-[443px]"
    >
      <div
        className={`border border-[#fff0] h-full ease-linear duration-300 transition-all  hover:border-primary ${
          isProductCard3 && "rounded-[8px]"
        }`}
      >
        <div
          className={`${
            isProductCard3 && "rounded-[8px] hover:rounded-b-none"
          } w-full overflow-hidden relative bg-[#F8F8F8] h-[298px] flex justify-center items-center`}
        >
          <Link href={`/shop/product-details/${product?._id}`}>
            <figure className="max-w-[212px] max-h-[212px] overflow-hidden">
              {isHover ? (
                <Image
                  src={product?.img[1] || img2}
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
                  src={product?.img[0] || img1}
                  width={212}
                  height={212}
                  alt="product image"
                />
              )}
            </figure>
          </Link>
          <div className={`absolute bottomToTop ${isHover ? "bottomToTopAnimate" : ""} `}>
            <ul className="flex gap-[10px] items-center">
              <li className="w-8 cursor-pointer transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full h-8  border border-primary">
                <label
                  htmlFor="quick-view"
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                >
                  <BiSearch className="text-[16px]" />
                </label>
              </li>
              <li
                onClick={() => handleAddToWishlist(product?._id)}
                className="w-8 cursor-pointer transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full h-8 flex items-center justify-center border border-primary"
              >
                <AiOutlineHeart className="text-[16px]" />
              </li>
              <li
                onClick={() => handleAddToCompare(product?._id)}
                className="w-8 cursor-pointer transition-all duration-300 ease-linear text-[#031424] hover:bg-primary hover:text-[#000000] rounded-full h-8 flex items-center justify-center border border-primary"
              >
                <BiGitCompare className="rotate-90 text-[16px]" />
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-5 px-[10px]">
          <h3 className="text-lg leading-[27px] text-center font-[600] text-info">
            <Link href={`/shop/product-details/${product?._id}`}>
              {product?.name ? product?.name : "Apple Watch Series 6 A2292 (M00D3)"}
            </Link>
          </h3>
          <div className="relative mt-[5px]">
            <div className={`${isHover ? "scale-0" : "scale-100"}`}>
              <div className="flex justify-center items-center gap-[10px]">
                <div className="flex gap-[2px] items-center justify-center">
                  <Rating5 />
                </div>
                <span className="2xl:text-[16px] text-[14px] text-[#808080] font-[500]  leading-[24px]">
                  ( {product?.review ? product?.review : "34"} reviews)
                </span>
              </div>
              <p className="text-[16px] mt-[5px] leading-6 font-[500] text-[#FD8D03] text-center">
                {product?.price ? `$${product?.price.toFixed(2)}` : "  $320.00"}
              </p>
            </div>
            <div
              className={`absolute bottomToTop w-full
             mx-auto ${isHover ? "bottomToTopAnimate" : ""} `}
            >
              <button
                onClick={() => handleAddToCart(product?._id)}
                className="text-[#000000] flex justify-center items-center h-[42px] rounded-[32px] mx-auto max-w-[158px] w-full bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[16px] leading-[24px] "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <QuickView product={product} />
    </div>
  );
};

export default ProductCard1;
