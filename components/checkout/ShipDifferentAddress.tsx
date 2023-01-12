import React, { useState } from "react";
import Collapsible from "react-collapsible";

const ShipDifferentAddress = ({ register, errors }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="form-control pb-[25px] pt-[2px]">
        <label className="label max-w-[250px] justify-start gap-[14px] cursor-pointer">
          <input
            onClick={() => setIsChecked(!isChecked)}
            type="checkbox"
            onChange={() => {}}
            className="checkbox border-[#D9D9D9] h-5 w-5 rounded-none checkbox-xs text-white checkbox-primary"
          />
          <span className="text-[#424242] text-[15px] leading-[22px] font-[400]">
            Ship to a different address?
          </span>
        </label>
      </div>
      <Collapsible trigger={""} className="w-full" open={isChecked}>
        {isChecked && (
          <div className="pb-[10px]">
            <div className="grid lg:grid-cols-2 lg:gap-[30px]">
              {/* First Name  */}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">First Name*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("firstName", {
                    required: { value: true, message: "First Name is require" },
                  })}
                />
                {errors.firstName?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.firstName?.message}</span>
                )}
              </div>
              {/* last Name */}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">Last Name*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("lastName", {
                    required: { value: true, message: "Last Name Name is require" },
                  })}
                />
                {errors.lastName?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.lastName?.message}</span>
                )}
              </div>
            </div>
            {/* compony */}
            <div className="form-control pb-5 w-full">
              <label className="label px-0 pt-0">
                <span className="text-[16px] text-[#424242] leading-[24px]">Compony*</span>
              </label>
              <input
                id="compony"
                type="text"
                className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                {...register("compony", {
                  required: { value: true, message: "compony is require" },
                })}
              />
              {errors.compony?.type === "required" && (
                <span className="alt text-red-500 text-xs">{errors.compony?.message}</span>
              )}
            </div>
            {/* Street Address  */}
            <div className="form-control pb-5 w-full">
              <label className="label px-0 pt-0">
                <span className="text-[16px] text-[#424242] leading-[24px]">Street Address*</span>
              </label>
              <input
                id="streetAddress"
                type="text"
                className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                {...register("streetAddress", {
                  required: { value: true, message: "street address is require" },
                })}
              />
              <input
                id="streetAddress"
                type="text"
                className="input rounded-none text-[16px] mt-[10px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                {...register("streetAddress", {
                  required: { value: true, message: "street address is require" },
                })}
              />
              {errors.streetAddress?.type === "required" && (
                <span className="alt text-red-500 text-xs">{errors.streetAddress?.message}</span>
              )}
            </div>

            {/* ========== Country / Region and Town / City  ======== */}
            <div className="grid lg:grid-cols-2 lg:gap-5">
              {/* Country   */}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">Country/Region*</span>
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Your country"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("country", {
                    required: { value: true, message: "country is require" },
                  })}
                />
                {errors.country?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.country?.message}</span>
                )}
              </div>
              {/*  city  */}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">Town/City*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter city"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("city", {
                    required: { value: true, message: "city is require" },
                  })}
                />
                {errors.city?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.city?.message}</span>
                )}
              </div>
            </div>

            {/* =========== ZIP Code and State  ======== */}
            <div className="grid lg:grid-cols-2 lg:gap-5">
              {/* ZIP Code**/}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">ZIP Code*</span>
                </label>
                <input
                  id="postalCode"
                  type="text"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("postalCode", {
                    required: { value: true, message: "postal code is require" },
                  })}
                />
                {errors.postalCode?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.postalCode?.message}</span>
                )}
              </div>
              {/* State * */}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">State*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("lastName", {
                    required: { value: true, message: "Last Name Name is require" },
                  })}
                />
                {errors.lastName?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.lastName?.message}</span>
                )}
              </div>
            </div>

            {/* ============ Email Address and phone =========== */}
            <div className="grid lg:grid-cols-2 lg:gap-5">
              {/* Phone Number */}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">Phone*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="text"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("lastName", {
                    required: { value: true, message: "Phone Number is require" },
                  })}
                />
                {errors.phoneNumber?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.phoneNumber?.message}</span>
                )}
              </div>
              {/* Email Address  */}
              <div className="form-control pb-5 w-full">
                <label className="label px-0 pt-0">
                  <span className="text-[16px] text-[#424242] leading-[24px]">Email Address*</span>
                </label>
                <input
                  id="emailAddress"
                  type="text"
                  className="input rounded-none text-[16px] h-[54px] leading-[22px] placeholder:text-[rgba(0,0,0,0.5)] text-black bg-[#ffffff] focus:outline-none  input-bordered"
                  {...register("email", {
                    required: { value: true, message: "Email address is require" },
                  })}
                />
                {errors.emailAddress?.type === "required" && (
                  <span className="alt text-red-500 text-xs">{errors.emailAddress?.message}</span>
                )}
              </div>
            </div>
          </div>
        )}
      </Collapsible>
    </>
  );
};

export default ShipDifferentAddress;
