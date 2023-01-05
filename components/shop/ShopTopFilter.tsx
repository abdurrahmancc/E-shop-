import React, { useState, Dispatch, SetStateAction } from "react";
import { FaListUl } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import Select from "react-select";
import { sortByStyle, showProductsStyle } from "../../styles/selectComponents";

interface SortOption {
  value: string;
  label: string;
}

interface ShowOption {
  value: string;
  label: string;
}

const sortOptions: SortOption[] = [
  { value: "recentAdded", label: "Recent Added" },
  { value: "popularity", label: "popularity" },
  { value: "latest", label: "latest" },
  { value: "lowToHight", label: "low To Hight" },
  { value: "hightToLow", label: "hight To Low" },
];

const ShowOptions: ShowOption[] = [
  { value: "8", label: "8" },
  { value: "12", label: "12" },
  { value: "16", label: "16" },
  { value: "20", label: "20" },
  { value: "24", label: "24" },
];

type Props = {
  toggleCard: boolean;
  setToggleCard: Dispatch<SetStateAction<boolean>>;
};
const ShopTopFilter = ({ toggleCard, setToggleCard }: Props) => {
  const [selectedSortOption, setSelectedSortOption] = useState<SortOption | null>(sortOptions[0]);
  const [selectedShowOption, setSelectedShowOption] = useState<ShowOption | null>(sortOptions[0]);

  return (
    <div className="flex md:flex-row gap-y-5 flex-col mt-[50px] mb-[30px] md:items-center justify-between">
      <span className="text-[16px] order-2 md:order-1 leading-8 text-[#424242]">
        Showing 16 of 87 results
      </span>
      <div className="flex order-1 md:order-2 items-center gap-5">
        <div className="flex items-center gap-3">
          <div
            onClick={() => setToggleCard(!toggleCard)}
            className={`w-[34px] cursor-pointer h-[34px] flex justify-center items-center ${
              !toggleCard ? "bg-[#EDEDED]" : "text-[#FFFFFF] bg-[#031424]"
            }`}
          >
            <TbGridDots />
          </div>
          <div
            onClick={() => setToggleCard(!toggleCard)}
            className={`w-[34px] h-[34px] cursor-pointer flex justify-center items-center ${
              toggleCard ? "bg-[#EDEDED]" : "text-[#FFFFFF] bg-[#031424]"
            }`}
          >
            <FaListUl />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[16px] leading-8 font-[500] text-[#424242]">Show:</span>
          <Select
            instanceId="show-Product"
            id="show-Product"
            styles={showProductsStyle}
            onChange={setSelectedShowOption}
            placeholder={"16"}
            isSearchable={false}
            options={ShowOptions}
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[16px] leading-8 font-[500] text-[#424242]">Sort by:</span>
          <Select
            instanceId="sort-by-product"
            id="sort-by-product"
            styles={sortByStyle}
            onChange={setSelectedSortOption}
            placeholder={"Recent Added"}
            isSearchable={false}
            options={sortOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopTopFilter;
