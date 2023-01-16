import { useRouter } from "next/router";
import React, { useState } from "react";
import Select from "react-select";
import {
  topHeaderCurrencySelectorStyle,
  topHeaderLanguageSelectorStyle,
} from "../../styles/selectComponents";

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

const TopHeader3 = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedMoneyOption, setSelectedMoneyOption] = useState<Option | null>(null);

  return (
    <div className="border-b bg-[#041E42] border-[rgba(255,255,255,0.24)]">
      <div className="max-w-[1443px] w-full mx-auto container px-4 lg:px-10 2xl:px-0">
        <div className="py-2 flex justify-center sm:justify-between items-center">
          <ul className="lg:flex items-center lg:gap-3 gap-1 hidden">
            <li className="text-[#FFFFFF] text-xs leading-[18px]">Eshop@gmail.com</li>
            <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
            <li
              onClick={() => router.push("/orderTrack")}
              className="text-[#FFFFFF] cursor-pointer text-xs leading-[18px]"
            >
              Order Tracking
            </li>
          </ul>
          <div className="text-[12px] mx-auto leading-[18px] text-[#FFFFFF]">
            Free Shipping On All order Over $200
          </div>
          <ul className=" lg:flex hidden lg:gap-3 gap-1">
            <li className="flex capitalize h-[24px] items-center gap-1 text-[#FFFFFF] text-xs leading-[18px]">
              <Select
                styles={topHeaderCurrencySelectorStyle}
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
            <li className="flex capitalize h-[24px] items-center gap-1 text-[#FFFFFF] text-xs leading-[18px]">
              <Select
                styles={topHeaderLanguageSelectorStyle}
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
            <li className="flex text-[12px] leading-[18px] text-[#FFFFFF] capitalize items-center gap-1">
              <span>Need Help?</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader3;
