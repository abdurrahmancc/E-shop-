import Image from "next/image";
import React from "react";
import { Td, Tr } from "react-super-responsive-table";
import { useAppDispatch } from "../../redux/app/reduxHooks";
import { removeToWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/features/shoppingCart/shoppingCartSlice";
import { ProductModel } from "../../types/types";
import { CgTrash } from "react-icons/cg";
import { format } from "date-fns";

interface Product {
  product: ProductModel;
}

const WishlistTableRow = ({ product }: Product) => {
  const dispatch = useAppDispatch();

  const handleWishlistDelete = (id: string): void => {
    dispatch(removeToWishlist(id));
  };

  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Add To wishlist", { autoClose: 1000 });
  };

  return (
    <>
      <Tr className={"sm:border-b border-x border-[#D9D9D9]"}>
        <Td className="border-r py-[14px] border-[#D9D9D9] text-center">
          <input
            type="checkbox"
            className="checkbox checkbox-primary border border-[#7C7C7C] rounded-none w-[15px] h-[15px]"
          />
        </Td>
        <Td className="border-r py-[14px]">
          <CgTrash
            onClick={() => handleWishlistDelete(product?._id)}
            className="text-[#031424] sm:mx-auto cursor-pointer text-[24px]"
          />
        </Td>
        <Td className="sm:py-[14px] py-[14px] pl-4 xl:w-[500px] lg:w-[300px] sm:w-[220px]  2xl:text-[17px] text-[13px] lg:text-[15px] leading-6 font-[500] ">
          <div className="flex items-center gap-3 lg:gap-5 xl:gap-[30px]">
            <figure className="p-[6px] rounded-[8px] bg-[#F8F8F8]">
              <Image
                height={80}
                width={80}
                className={"xl:h-[80px] xl:w-[80px] h-[50px] w-[48px]"}
                src={`${product?.img[0]}`}
                alt="product-img"
              />
            </figure>
            <h3 className="text-info ">{product?.name}</h3>
          </div>
        </Td>
        <Td className="2xl:text-[17px] py-[14px] text-[13px] lg:text-[15px] text-center sm:py-[14px] pb-4 leading-[25px] text-[#424242] font-[500] ">
          ${product?.price.toFixed(2)}
        </Td>
        <Td className="2xl:text-[17px] py-[14px] text-[13px] lg:text-[15px]  text-center font-[500] leading-[25px] text-[#424242]">
          {format(new Date(product.updatedAt), "MMM dd, yyyy")}
        </Td>
        <Td className="2xl:text-[17px] py-[14px] text-[13px] lg:text-[15px]  text-center lg:w-[150px] sm:w-[120px] font-[500] leading-[25px] text-[#424242]">
          {product?.status}
        </Td>
        <Td className="2xl:text-[17px] max-w-[160px] text-[13px] lg:text-[15px] py-[14px] pb-4 text-center leading-[25px] font-[500] ">
          <button
            onClick={() => handleAddToCart(product?._id)}
            className="xl:text-[18px] md:text-[15px] text-sm text-[#000000] leading-[30px] bg-primary w-[100px] h-[40px] md:w-[110px] md:h-[42px] xl:w-[154px] xl:h-[50px] rounded-[8px]"
          >
            Add to cart
          </button>
        </Td>
      </Tr>
    </>
  );
};

export default WishlistTableRow;
