import Image from "next/image";
import React, { useState } from "react";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import user from "../../assets/icons/user.svg";
import { FiChevronDown } from "react-icons/fi";
import Select from "react-select";
import {
  topHeaderCurrencySelectorStyle,
  topHeaderLanguageSelectorStyle,
} from "../../styles/selectComponents";
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

const TopHeader1 = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedMoneyOption, setSelectedMoneyOption] = useState<Option | null>(null);

  return (
    <div className="py-2 flex justify-center sm:justify-between items-center">
      <ul className="sm:flex gap-3 hidden">
        <li className="flex capitalize items-center gap-1">
          <Image src={mail} width={16} height={16} alt="mail icons" />
          <span className="text-[#FFFFFF] text-xs leading-[18px]">info@demo.com</span>
        </li>
        <div className="h-[25.5px] w-[1px] bg-[rgba(255,255,255,0.24)]"></div>
        <li
          onClick={() => router.push("/orderTrack")}
          className="flex capitalize cursor-pointer items-center gap-1"
        >
          <Image src={location} width={16} height={16} alt="location icons" />
          <span className="text-[#FFFFFF] text-xs leading-[18px]">Track Order</span>
        </li>
      </ul>
      <ul className="flex gap-3 items-center">
        <li className="flex capitalize cursor-pointer items-center gap-1 text-[#FFFFFF] text-xs h-[24px] leading-[18px]">
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
        <li className="flex capitalize cursor-pointer items-center gap-1 text-[#FFFFFF] text-xs h-[24px] leading-[18px]">
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
        <li
          onClick={() => router.push("/dashboard/userDashboard")}
          className="flex cursor-pointer capitalize items-center gap-1"
        >
          <Image src={user} width={16} height={16} alt="user icons" />
          <span className="text-[#FFFFFF] text-xs leading-[18px]">My account</span>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader1;
