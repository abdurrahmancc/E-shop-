import Image from "next/image";
import React, { useState } from "react";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import Select from "react-select/";
import {
  topHeaderCurrencySelectorStyle2,
  topHeaderLanguageSelectorStyle2,
} from "../../styles/selectComponents";
import LoginSlider from "../modals/login/LoginSlider";
import { useRouter } from "next/router";

type Option = {
  value: string;
  label: string;
};

const options: Option[] = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "Arabic", label: "Arabic" },
];
const optionsM: Option[] = [
  { value: "USD", label: "USD" },
  { value: "GBP", label: "GBP" },
  { value: "EUR", label: "EUR" },
  { value: "RUB", label: "RUB" },
];

const TopHeader2 = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedMoneyOption, setSelectedMoneyOption] = useState<Option | null>(null);
  return (
    <>
      <div className="border-b lg:border-b-[#D4D4D4] border-[rgba(255,255,255,0.24)]  bg-[#041E42] lg:bg-[#ffffff]">
        <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
          <div className="py-2 flex justify-center sm:justify-between items-center">
            <ul className="lg:flex items-center lg:gap-3 gap-1 hidden">
              <li className="flex capitalize items-center gap-1">
                <Image src={mail} width={16} height={16} alt="mail icons" />
                <span className="text-[#424242] text-xs leading-[18px]">info@demo.com</span>
              </li>
              <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
              <li
                onClick={() => router.push("/orderTrack")}
                className="flex cursor-pointer capitalize items-center gap-1"
              >
                <Image src={location} width={16} height={16} alt="location icons" />
                <span className="text-[#424242] text-xs leading-[18px]">Track Order</span>
              </li>
            </ul>
            <div className="text-[12px] mx-auto leading-[18px] text-white lg:text-[#424242]">
              Get discount 30% off your first order
            </div>
            <ul className=" lg:flex items-center hidden lg:gap-3 gap-1">
              <li className="flex capitalize h-[25px] items-center gap-1 text-[#424242] text-xs leading-[18px]">
                <Select
                  styles={topHeaderCurrencySelectorStyle2}
                  id="top-header-currency-select-component"
                  instanceId="top-header-currency-select-component"
                  defaultValue={selectedMoneyOption}
                  onChange={setSelectedMoneyOption}
                  placeholder={"USD"}
                  options={optionsM}
                  isSearchable={false}
                />
              </li>
              <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
              <li className="flex capitalize h-[25px] items-center gap-1 text-[#424242] text-xs leading-[18px]">
                <Select
                  styles={topHeaderLanguageSelectorStyle2}
                  id="top-header-language-select-component"
                  instanceId="top-header-language-select-component"
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  placeholder={"English"}
                  options={options}
                  isSearchable={false}
                />
              </li>
              <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
              <li className="flex text-[12px] leading-[18px] text-[#424242] capitalize items-center gap-1">
                <button className="text-[12px] leading-[18px] text-[#424242]">
                  <label htmlFor="signUp" className="cursor-pointer">
                    Login
                  </label>
                </button>
                /
                <button className="text-[12px] leading-[18px] text-[#424242]">
                  <label htmlFor="signUp" className="cursor-pointer">
                    Register
                  </label>{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LoginSlider />
    </>
  );
};

export default TopHeader2;
