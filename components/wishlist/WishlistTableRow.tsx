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
      <Tr className={"sm:border-b border-[rgba(100,48,1,0.3)] "}>
        <Td className="py-4 pl-4 w-[550px] text-[15px] leading-6 font-[500] ">
          <div className="flex items-center gap-3 lg:gap-6">
            <CgTrash
              onClick={() => handleWishlistDelete(product?._id)}
              className="hidden text-[#031424] cursor-pointer sm:block text-[20px]"
            />

            <div className="flex items-center gap-8">
              <Image
                height={100}
                width={103}
                className={"xl:h-[100px] xl:w-[103px] h-[50px] w-[48px]"}
                src={`${product?.img[0]}`}
                alt="product-img"
              />
              <h3 className="text-info">{product?.name}</h3>
            </div>
          </div>
        </Td>
        <Td className="text-[15px]sm:pl-3 sm:py-4 pb-4 leading-[25px] font-[500] ">
          ${product?.price.toFixed(2)}
        </Td>
        <Td className="text-[17px] font-[500] leading-[25px] text-[#424242]">
          {format(new Date(product.updatedAt), "MMM dd, yyyy")}
        </Td>
        <Td className="text-[17px] font-[500] leading-[25px] text-[#424242]">{product?.status}</Td>
        <Td className="text-[15px] sm:py-4 pb-4 text-center leading-[25px] font-[500] ">
          <button
            onClick={() => handleAddToCart(product?._id)}
            className="text-[20px] text-[#000000] leading-[30px] bg-primary w-[154px] h-[50px] rounded-[8px]"
          >
            Add to cart
          </button>
        </Td>
        <Td
          onClick={() => handleWishlistDelete(product?._id)}
          className="text-[15px]  cursor-pointer sm:py-4 pb-4 sm:hidden text-center leading-[25px] font-[500] text-[#031424]"
        >
          <CgTrash onClick={() => handleWishlistDelete(product?._id)} />
        </Td>
      </Tr>
    </>
  );
};

export default WishlistTableRow;
