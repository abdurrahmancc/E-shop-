import Image from "next/image";
import React, { useState } from "react";
import { Td, Tr } from "react-super-responsive-table";
import { useAppDispatch } from "../../redux/app/reduxHooks";
import { removeToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import {
  addToCart,
  changeQuantity,
  removeToCart,
} from "../../redux/features/shoppingCart/shoppingCartSlice";
import { ProductModel } from "../../types/types";
import { CgTrash } from "react-icons/cg";

interface Product {
  product: ProductModel;
}

const CartTableRow = ({ product }: Product) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [totalPrice, setTotalPrice] = useState<number>(product?.price * product.quantity);
  const dispatch = useAppDispatch();

  const handleCartQuantity = (data: number): void => {
    if (data < 1) return;
    setQuantity(data);
    setTotalPrice(product?.price * data);
    const info = { quantity: data, id: product._id };
    dispatch(changeQuantity(info));
  };

  const handleWishlistDelete = (id: string): void => {
    dispatch(removeToCart(id));
  };

  return (
    <>
      <Tr className={"sm:border-b border-[#D9D9D9]"}>
        <Td className="sm:py-[35px] py-[14px] pl-4 2xl:text-[17px] text-[13px] lg:text-[15px] leading-6 font-[600] ">
          <div className="flex items-center gap-3 lg:gap-5">
            <figure className="p-[18.5px] rounded-[8px] bg-[#F8F8F8]">
              <Image
                height={80}
                width={80}
                className={"xl:h-[80px] xl:w-[80px] h-[50px] w-[48px]"}
                src={`${product?.img[0]}`}
                alt="product-img"
              />
            </figure>
            <div>
              <h3 className="text-info">{product?.name}</h3>
              <p className="text-[16px] mt-[6px] text-[#505050] leading-[24px] font-[600]">
                ${product?.price.toFixed(2)}
              </p>
            </div>
          </div>
        </Td>
        <Td className="2xl:text-[17px] py-[14px] text-[13px] lg:text-[15px] text-center sm:py-[35px] pb-4 leading-[25px] text-[#424242] font-[500] ">
          <div className="flex flex-col items-center sm:mx-auto w-[52px] justify-between h-[112px] py-4 rounded-[44px] border border-[#D9D9D9]">
            <button
              onClick={() => handleCartQuantity(quantity - 1)}
              className="text-[24px] text-[#3E3E3E]"
            >
              -
            </button>
            <span className="text-[#3E3E3E]">{quantity}</span>
            <button
              onClick={() => handleCartQuantity(quantity + 1)}
              className="text-[24px] text-[#3E3E3E]"
            >
              +
            </button>
          </div>
        </Td>
        <Td className="2xl:text-[24px] sm:text-[20px] text-[13px]  py-[14px]  text-center font-[500] leading-[36px] text-primary">
          ${totalPrice.toFixed(2)}
        </Td>
        <Td className="2xl:text-[17px] py-[14px]">
          <CgTrash
            onClick={() => handleWishlistDelete(product?._id)}
            className="text-[#031424] cursor-pointer text-[24px]"
          />
        </Td>
      </Tr>
    </>
  );
};

export default CartTableRow;
