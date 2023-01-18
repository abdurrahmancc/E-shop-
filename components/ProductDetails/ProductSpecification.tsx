import React from "react";

const ProductSpecification = ({ SpecificationInfo }: any) => {
  return (
    <div>
      {SpecificationInfo &&
        SpecificationInfo.map((specific: any, i: any) => {
          const data = Object.values(specific);
          const infoData: any = data[0];
          return (
            <div key={i} className={`${i ? "pt-5" : "pt-0"}`}>
              <table className="w-full">
                <thead>
                  <tr>
                    <th colSpan={2} className="p-3 bg-[#F2F4F8] font-[500] text-start text-info">
                      {Object?.keys(specific || {})}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {infoData.map((info: any, i: any) => {
                    try {
                      const fo = Object?.keys(info || {});
                      const details: any = Object?.values(info);
                      return (
                        <tr key={i} className="border-b border-[#AEAEAE]">
                          <td className="text-[#4F4F4F] 2xl:w-[550px] xl:w-[450px] lg:w-[300px] md:w-[250px] sm:w-[200px] w-[150px] capitalize py-3 text-sm md:text-[16px] relative leading-6 ">
                            <div className="absolute top-3">{fo[0]}</div>
                          </td>
                          <td className="text-[#4F4F4F] py-3 text-sm md:text-[16px] leading-6 ">
                            {Array.isArray(details[0]) ? (
                              <ul>
                                {details[0].map((item, i) => {
                                  const isIncludes = item.includes(":");
                                  return (
                                    <li key={i} className={`${isIncludes && "mt-7"}`}>
                                      {item}
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : (
                              <span>{details[0]}</span>
                            )}
                          </td>
                        </tr>
                      );
                    } catch (error) {
                      console.log(error);
                    }
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default ProductSpecification;
