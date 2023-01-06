import Image from "next/image";
import React, { useState } from "react";
import payment_img from "../../assets/icons/payment-method.png";

type TotalPriceModel = {
  totalPrice: number;
  prices: number[];
};

const CartTotal = ({ totalPrice, prices }: TotalPriceModel) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  let Shipping = 15;
  Shipping = prices.length * Shipping;
  const tax = totalPrice * 0.05;
  let total = totalPrice + Shipping + tax;

  return (
    <div className="xl:max-w-[460px] max-h-[635px] lg:max-w-[400px] mx-auto mt-10 lg:mt-0 w-full border border-[#D9D9D9]">
      <h2 className="font-[500] bg-[#F0F0F0] text-center text-[20px] leading-[26px] border-b-2 border-primary py-[20px] text-[#031424]">
        Cart Total
      </h2>
      <div className="w-full">
        <div className="w-full px-8 pt-7 pb-5">
          {/*------------------- price table start--------------- */}
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pb-4 text-[17px] leading-[26px] text-[#031424] font-[500]">
                  Subtotal
                </td>
                <td className="pb-4 text-[17px] text-end leading-[26px] text-[#424242] font-[500]">
                  ${totalPrice.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="pb-4 text-[17px] leading-[26px] text-[#031424] font-[500]">
                  Shipping
                </td>
                <td className=" pb-4 text-[17px] text-end leading-[26px] text-[#424242] font-[500]">
                  ${Shipping.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="pb-5 text-[17px] leading-[26px] text-[#031424] font-[500]">
                  VAT 5%
                </td>
                <td className="pb-5 text-[17px] text-end leading-[26px] text-[#424242] font-[500]">
                  ${tax.toFixed(2)}
                </td>
              </tr>
              <tr className="border-y border-y-[#D9D9D9] ">
                <td className="py-[20px] font-[600] text-[18px] leading-[26px] text-[#031424] ">
                  Total
                </td>
                <td className="py-[20px] font-[600] text-[18px] text-end leading-[26px] text-info ">
                  ${total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-[27px]">
            <Image
              src={payment_img}
              width={420.39}
              height={45.61}
              className="w-full h-auto"
              alt="payment logo"
            />
          </div>
          <div className="form-control mt-[120px]">
            <label className="label justify-start gap-2 cursor-pointer">
              <input
                onClick={() => setIsChecked(!isChecked)}
                type="checkbox"
                className="checkbox w-[17px] h-[17px] hover:border-[#D9D9D9]  border border-[#D9D9D9] rounded-none checkbox-xs text-white checkbox-primary"
              />
              <span className="label-text leading-[26px] text-[#424242] text-[14px]">
                I agree with the terms & conditions
              </span>
            </label>
          </div>

          <div className="mt-5">
            <button
              disabled={!isChecked}
              className="disabled:bg-primary font-[500] disabled:opacity-80 rounded-[8px] btn-animate text-[20px] capitalize leading-[30px] bg-primary h-16 w-full text-[#031424]"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
