import Image from "next/image";
import React from "react";
import { CgTrash } from "react-icons/cg";
import { Table, Tbody, Td, Tr } from "react-super-responsive-table";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../redux/app/reduxHooks";
import { removeToCompare } from "../../redux/features/compare/compareSlice";
import { addToCart } from "../../redux/features/shoppingCart/shoppingCartSlice";
import { ProductModel } from "../../types/types";
import { Rating5 } from "../shared/Ratings/Ratings";

interface Compare {
  compare: ProductModel[];
}

const CompareTable = ({ compare }: Compare) => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeToCompare(id));
    toast.success("Deleted", { autoClose: 1000 });
  };

  const handleAddToCart = (id: string) => {
    dispatch(addToCart(id));
    toast.success("Add To cart", { autoClose: 1000 });
  };
  return (
    <div id="compareTable" className="w-full">
      {/* =========== compare table start ========== */}
      <Table>
        <Tbody>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] py-[30px] font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Preview
            </Td>
            {compare &&
              compare.map((product) => (
                <Td key={product?._id} className={"border"}>
                  <div className={"border-t sm:border-none border-gray-300"}>
                    <figure className="py-[43px]">
                      <Image
                        width={214}
                        height={214}
                        className="mx-auto"
                        src={product?.img[0]}
                        alt="compare_image"
                      />
                    </figure>
                  </div>
                </Td>
              ))}
          </Tr>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] sm:py-[30px] py-2 font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Product
            </Td>
            {compare &&
              compare.map((product) => (
                <Td key={product?._id} className={"border"}>
                  <div className={"border-t sm:border-none border-gray-300"}>
                    <h5 className="text-center font-[500] text-[#6B6B6B] leading-[30px] sm:text-[18px] lg:text-lg xl:text-[20px] py-[30px]">
                      {product?.name}
                    </h5>
                  </div>
                </Td>
              ))}
          </Tr>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] sm:py-[30px] py-2 font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Price
            </Td>
            {compare &&
              compare.map((product) => (
                <Td key={product?._id} className={"border"}>
                  <div className={"border-t sm:border-none border-gray-300"}>
                    <p className="text-[24px] text-center leading-[36px] font-[500] py-[30px] text-primary">
                      ${product?.price}
                    </p>
                  </div>
                </Td>
              ))}
          </Tr>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] sm:py-[30px] py-2 font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Rating
            </Td>
            {compare &&
              compare.map((product) => (
                <Td key={product?._id} className={"border"}>
                  <div className={"border-t py-[30px] sm:border-none border-gray-300"}>
                    <div className="flex justify-center items-center gap-[10px]">
                      <div className="flex gap-[2px] items-center justify-center">
                        <Rating5 width="w-[20px]" height="h-[20px]" />
                      </div>
                      <span className="2xl:text-[20px] text-[14px] text-[#6A6A6A] font-[500] leading-[30px]">
                        ( {product?.review})
                      </span>
                    </div>
                  </div>
                </Td>
              ))}
          </Tr>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] sm:py-[30px] py-2 font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Description
            </Td>
            {compare &&
              compare.map((product) => {
                return (
                  <Td key={product?._id} className={"border"}>
                    <div className={"border-t sm:border-none border-gray-300"}>
                      <div className="text-center text-[16px] py-5 flex gap-x-2 leading-[28px] text-[#6A6A6A] justify-center px-5">
                        <span className="opacity-80">{product?.description.slice(0, 115)}...</span>
                      </div>
                    </div>
                  </Td>
                );
              })}
          </Tr>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] sm:py-[30px] py-2 font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Stock Status
            </Td>
            {compare &&
              compare.map((product) => (
                <Td key={product?._id} className={"border"}>
                  <div className={"border-t py-[30px] sm:border-none border-gray-300"}>
                    <div className="text-[16px] flex justify-center items-center mx-auto w-[86px] h-9 bg-[#F0F9F4] text-[#00A046] leading-[24px] ">
                      {product?.status}
                    </div>
                  </div>
                </Td>
              ))}
          </Tr>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] sm:py-[30px] py-2 font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Buy now
            </Td>
            {compare &&
              compare.map((product) => {
                return (
                  <Td key={product?._id} className={"border"}>
                    <div className={"border-t sm:border-none border-gray-300"}>
                      <div className="py-5">
                        <button
                          onClick={() => handleAddToCart(product?._id)}
                          className="text-[#000000] flex justify-center items-center h-[50px] rounded-[32px] mx-auto max-w-[181px] w-full bg-gradient-to-r from-[#f9c536] to-[#f9c536] btn-animate  bg-primary text-[20px] leading-[30px] "
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </Td>
                );
              })}
          </Tr>
          <Tr className={"border"}>
            <Td
              className={
                "lg:min-w-[150px] 2xl:min-w-[264px] card-border sm:min-w-[100px] sm:py-[30px] py-2 font-[500] leading-[30px] text-[20px] text-[#666C73] capitalize text-center"
              }
            >
              Action
            </Td>
            {compare &&
              compare.map((product) => {
                return (
                  <Td key={product?._id} className={"border"}>
                    <div className={"border-t sm:border-none border-gray-300"}>
                      <div
                        onClick={() => handleRemove(product?._id)}
                        className="py-5 text-center cursor-pointer flex items-center text-[16px] text-[#787878] leading-[28px] gap-2 justify-center"
                      >
                        <CgTrash className="text-[20px]" />
                        <span>Remove</span>
                      </div>
                    </div>
                  </Td>
                );
              })}
          </Tr>
        </Tbody>
      </Table>
      {/* =========== compare table end ========== */}
    </div>
  );
};

export default CompareTable;
