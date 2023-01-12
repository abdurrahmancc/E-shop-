import Image from "next/image";
import React, { useState } from "react";
import img from "../../assets/product-Image/product-1.png";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { useRouter } from "next/router";
import { ProductModel } from "../../types/types";

const CheckoutTable = ({ cartProducts, onSubmit }: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const router = useRouter();
  let totalPrice: number = 0;

  const price = cartProducts.map((product: any) => product.price * product.quantity);
  const initialValue = 0;
  if (price?.length >= 1) {
    const sumReduce = price.reduce(
      (previous: any, current: any) => previous + current,
      initialValue
    );
    totalPrice = sumReduce;
  }

  let Shipping: number = 15;
  Shipping = cartProducts.length * Shipping;
  let total = totalPrice + Shipping;

  return (
    <div
      id="checkoutTable"
      className="border flex flex-col justify-between relative min-h-[942px] px-5 border-[#D9D9D9]"
    >
      <Table className="w-full">
        <Thead>
          <Tr className="border-b border-b-[#D9D9D9]">
            <Th className="text-[16px] w-[260px] leading-[24px] py-[16.5px] text-start font-[500] text-[#474747]">
              Product
            </Th>
            <Th className="text-[16px] py-[16.5px] leading-[24px] font-[500] text-[#474747]">
              Quantity
            </Th>
            <Th className="text-[16px] text-end py-[16.5px] leading-[24px] font-[500] text-[#474747]">
              Subtotal
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartProducts.length >= 1 &&
            cartProducts.map((product: ProductModel) => {
              return (
                <Tr key={product?._id} className={"border-b "}>
                  <Td className="py-[20px]">
                    <div className="flex items-center gap-[12px]">
                      <figure className="p-[10.5px] bg-[#F8F8F8]">
                        <Image
                          width={42}
                          height={42}
                          className="w-[42px] h-[42px]"
                          src={product?.img[0]}
                          alt="product"
                        />
                      </figure>
                      <h4 className="text-[14px] font-[500] max-w-[179.57px] text-[#424242] leading-[21px]">
                        {product?.name}
                      </h4>
                    </div>
                  </Td>
                  <Td className="text-center py-[20px] text-[14px] font-[500] max-w-[179.57px] text-[#424242] leading-[21px]]">
                    {product?.quantity}
                  </Td>
                  <Td className="text-end py-[20px] text-[14px] font-[500] max-w-[179.57px] text-[#424242] leading-[21px]]">
                    ${(product?.price * product.quantity).toFixed(2)}
                  </Td>
                </Tr>
              );
            })}

          <Tr>
            <Td className="pt-[20px] pb-3 text-[16px] text-[#424242] leading-6 font-[500]">
              Shipping
            </Td>
            <Td className="text-center text-[14px] font-[500] max-w-[179.57px] text-[#424242] leading-[21px]]"></Td>
            <Td className="text-end text-[16px] text-[#424242] leading-6 font-[500]">
              ${Shipping.toFixed(2)}
            </Td>
          </Tr>
          <Tr className={"border-b "}>
            <Td className="pb-[20px] text-[16px] text-[#424242] leading-6 font-[500]">Subtotal</Td>
            <Td className="text-center text-[14px] font-[500] max-w-[179.57px] text-[#424242] leading-[21px]]"></Td>
            <Td className="text-end pb-[20px] text-[16px] text-[#424242] leading-6 font-[500]">
              ${totalPrice.toFixed(2)}
            </Td>
          </Tr>
          <Tr>
            <Td className="pt-3 pb-5 text-[16px] text-[#031424] leading-6 font-[600]">Total</Td>
            <Td className="text-center text-[14px] font-[500] max-w-[179.57px] text-[#424242] leading-[21px]]"></Td>
            <Td className="text-end pb-5 pt-3 text-[16px] text-[#424242] leading-6 font-[600]">
              {total.toFixed(2)}
            </Td>
          </Tr>
        </Tbody>
      </Table>

      <div className="">
        <div className="form-control">
          <label className="label p-0 gap-3 justify-start cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio border-[#D9D9D9] checked:border-primary  checked:bg-primary w-[19px] h-[19px]"
            />
            <span className="text-[14px] label-text text-[#424242] font-[500] leading-[21px]">
              Direct bank transfer
            </span>
          </label>
        </div>
        <div className="form-control mt-[15px]">
          <label className="label p-0 gap-3 justify-start cursor-pointer">
            <input
              type="radio"
              name="radio-11"
              className="radio border-[#D9D9D9] checked:border-primary checked:bg-primary w-[19px] h-[19px]"
            />
            <span className="text-[14px] label-text text-[#424242] font-[500] leading-[21px]">
              Cash on delivery
            </span>
          </label>
        </div>
        <p className="text-[14px] mt-5 leading-[20px] text-[#575757]">
          Your personal information will be utilized for order processing, enhancing your online
          experience, and other uses as outlined in our{" "}
          <span className="text-[#FF1616] font-[500]">privacy policy</span>
        </p>
        <div className="form-control mt-5">
          <label className="label jus items-start gap-3 p-0 cursor-pointer">
            <input
              onClick={() => setIsChecked(!isChecked)}
              type="checkbox"
              onChange={() => {}}
              className="checkbox w-[15px] mt-1 border-[#D9D9D9] h-[15px] rounded-none checkbox-primary"
            />
            <span className="text-[14px] text-[#000000] leading-[21px]">
              I&apos;ve read and accept the website&apos;s{" "}
              <span className="text-[#E80808]">terms and conditions.</span>
            </span>
          </label>
        </div>
        <div className="mt-5 mb-6">
          <button
            disabled={!isChecked}
            onClick={() => router.push("/checkout")}
            className="disabled:bg-primary disabled:cursor-not-allowed font-[500] disabled:opacity-80 rounded-[8px] btn-animate text-[20px] capitalize leading-[30px] bg-primary h-16 w-full text-[#031424]"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTable;
