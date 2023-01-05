import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";

const SpecificationInfo: any = [
  {
    ["basic Info"]: [
      { processor: "Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)" },
      { ram: "8GB 2666MHz DDR4 RAM" },
      { ["Graphics Card"]: "Radeon Pro 560X with 4GB of GDDR5 Graphics" },
      { storage: "256GB SSD" },
      {
        monitor: [
          "21.5-inch (diagonal) Retina 4K display",
          "4096-by-2304 resolution with support for one billion colors",
          "500 nits brightness",
          "Wide color (P3)",
        ],
      },
      {
        audio: ["Stereo speakers", "Microphone", "3.5 mm headphone jack"],
      },
      {
        ["Network Wireless Connectivity"]: [
          `Intel Core i5 8th Gen Processor (3.0GHz up to 4.1GHz)`,
          "LAN:",
          "10/100/1000BASE-T Gigabit Ethernet (RJ-45 connector)",
          "Wi-Fi:",
          "802.11ac Wi-Fi wireless networking",
          "IEEE 802.11a/b/g/n compatible",
          "Bluetooth:",
          "Bluetooth 4.2 wireless technology",
          "Connections and Expansion:",
          "SDXC card slot",
          "Four USB-A ports",
          "Two Thunderbolt 3 (USB-C) ports with support for:",
          "DisplayPort",
          "Thunderbolt (up to 40Gb/s)",
          "USB 3.1 Gen 2 (up to 10Gb/s)",
          "Thunderbolt 2, HDMI, DVI, and VGA supported using adapters (sold separately)",
        ],
      },
      { ["operating System"]: `macOS` },
    ],
  },
  {
    ["warranty Information"]: [{ warranty: "01 Year International Warranty" }],
  },
];

const BottomDetails = () => {
  const [isActive, setIsActive] = useState<string>("description");
  return (
    <div>
      <div className="bg-[#ffffff] p-5">
        <ul className="flex items-center gap-7 border-b border-[#AEAEAE]">
          <li
            onClick={() => setIsActive("description")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "description"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Description
          </li>
          <li
            onClick={() => setIsActive("specification")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "specification"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Specification
          </li>
          <li
            onClick={() => setIsActive("reviews")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "reviews"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Reviews (12)
          </li>
          <li
            onClick={() => setIsActive("askQuestion")}
            className={` text-[20px] border-b-[5px] cursor-pointer pb-[12px] leading-8 font-[500] ${
              isActive == "askQuestion"
                ? "text-info border-primary"
                : "text-[#031424] border-[#ffffff00]"
            }`}
          >
            Ask Question
          </li>
        </ul>
      </div>
      <div className="mt-[30px] bg-[#ffffff] p-5">
        {isActive == "description" && <ProductDescription />}
        {isActive == "specification" && (
          <ProductSpecification SpecificationInfo={SpecificationInfo} />
        )}
      </div>
    </div>
  );
};

export default BottomDetails;
