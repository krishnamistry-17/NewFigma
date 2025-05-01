import React from "react";
import trend1 from "../../../assets/images/trend1.png";
import trend2 from "../../../assets/images/trend2.png";
import trend3 from "../../../assets/images/trend3.png";

const Trends = () => {
  return (
    <>
      <div className="bg-white-light w-full lg:h-[737px] md:h-[1007px] font-inter ">
        <div className="xl:mx-[75px] lg:mx-[20px] md:mx-[20px] sm:mx-[40px] xs:mx-[10px]">
          <div className="text-center">
            <p
              className="font-bold 
            xl:text-[68px] lg:text-[56px] md:text-[46px]
            sm:text-[36px] xs:text-[30px]
            text-black-heads sm:pt-[95px] xs:pt-[26px]"
            >
              Latest trends & insights
            </p>
          </div>
          <div className="sm:mt-[74px] xs:mt-[26px]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div>
                <img src={trend1} alt="t1" className="w-[410px] h-[272px]" />
                <p
                  className="font-bold 
                xl:text-[26px] lg:text-[22px] md:text-[20px] sm:text-[22px] xs:text-[19px] text-black-heads xl:max-w-[344px] pt-[20px]"
                >
                  3 Low-Cost Campaigns You Must Run to Win BFCM
                </p>
              </div>
              <div>
                <img src={trend2} alt="t2" className="w-[410px] h-[272px]" />
                <p className="font-bold xl:text-[28px] lg:text-[25px] md:text-[22px] sm:text-[25px] xs:text-[21px] text-black-heads xl:max-w-[357px] pt-[20px]">
                  Postcard Marketing: The Definitive Guide to High ROI [2022]
                </p>
              </div>
              <div>
                <img src={trend3} alt="t3" className="w-[410px] h-[272px]" />
                <p className="font-bold  xl:text-[25px] lg:text-[22px] md:text-[20px] sm:text-[22px] xs:text-[19px] text-black-heads xl:max-w-[357px] pt-[20px]">
                  The Ultimate Guide to Thank You Notes for Ecommerce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trends;
