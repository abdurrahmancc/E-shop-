import React from "react";

interface SmartWatchModel {
  _id: string;
  name: string;
  quantity: number;
}

interface HeadphonesModel {
  _id: string;
  name: string;
  quantity: number;
}

interface StatusModel {
  _id: string;
  name: string;
  quantity: number;
}

const smartWatch: SmartWatchModel[] = [
  { _id: "1", name: "Apple", quantity: 12 },
  { _id: "2", name: "Samsung", quantity: 34 },
  { _id: "3", name: "Realme", quantity: 13 },
  { _id: "4", name: "Xiomi", quantity: 0 },
  { _id: "5", name: "One Plus", quantity: 12 },
  { _id: "6", name: "Huawei", quantity: 32 },
  { _id: "7", name: "Lenovo ", quantity: 21 },
];

const headphones: HeadphonesModel[] = [
  { _id: "8", name: "Apple", quantity: 12 },
  { _id: "9", name: "Samsung", quantity: 34 },
  { _id: "10", name: "Realme", quantity: 13 },
  { _id: "11", name: "Xiomi", quantity: 9 },
  { _id: "12", name: "One Plus", quantity: 12 },
  { _id: "13", name: "Huawei", quantity: 32 },
  { _id: "14", name: "Lenovo ", quantity: 21 },
];
const status: StatusModel[] = [
  { _id: "15", name: "Stock in", quantity: 12 },
  { _id: "16", name: "Pre Order", quantity: 34 },
  { _id: "17", name: "Upcoming", quantity: 13 },
];

const HomeFilter2 = () => {
  const isLastSmartWatch = smartWatch.length - 1;
  const isLastHeadphones = headphones.length - 1;
  const isLastStatus = status.length - 1;
  return (
    <>
      {/* =========== Smart Watch start ========== */}
      <div className="w-full">
        <h4 className="text-[20px] pb-4 text-secondary leading-[30px] font-[500]">Smart Watch</h4>
        <div className="">
          {smartWatch.map((watch, i) => (
            <div key={watch?._id} className={`form-control ${isLastSmartWatch == i ? "" : "pb-3"}`}>
              <label className="label p-0 gap-[10px] cursor-pointer">
                <span className="label-text text-[#414141] font-[400] text-sm leading-[22px] ">
                  {watch?.name}
                </span>
                <span className="text-[#414141] font-[400] text-sm leading-[22px]">
                  {" "}
                  (${watch?.quantity})
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* =========== Smart Watch end ========== */}
      {/* =========== Headphones start ========== */}
      <div className="mt-5">
        <h4 className="text-[20px] pb-4 text-secondary leading-[30px] font-[500]">Headphones</h4>
        <div className="">
          {headphones.map((headphone, i) => (
            <div
              key={headphone?._id}
              className={`form-control ${isLastHeadphones == i ? "" : "pb-3"}`}
            >
              <label className="label p-0 gap-[10px] cursor-pointer">
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {headphone?.name}
                </span>
                <span className="text-[#414141] font-[400] text-sm leading-[22px]">
                  {" "}
                  (${headphone?.quantity})
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* =========== Headphones end ========== */}

      {/* =========== Status start ========== */}
      <div className="mt-5">
        <h4 className="text-[20px] pb-4 text-secondary leading-[30px] font-[500]">Status</h4>
        <div className="">
          {status.map((item, i) => (
            <div key={item?._id} className={`form-control ${isLastStatus == i ? "" : "pb-3"}`}>
              <label className="label p-0 gap-[10px] cursor-pointer">
                <span className="label-text text-[#414141] text-sm leading-[22px] ">
                  {item?.name}
                </span>
                <span className="text-[#414141] font-[400] text-sm leading-[22px]">
                  {" "}
                  (${item?.quantity})
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* =========== Status end ========== */}
    </>
  );
};

export default HomeFilter2;
