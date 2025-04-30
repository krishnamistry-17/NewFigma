import React from "react";
import one from "../../../assets/images/div1.png";
import two from "../../../assets/images/div2.png";
import three from "../../../assets/images/div3.png";
import four from "../../../assets/images/div4.png";
const FastLaunch = () => {
  return (
    <>
      <div className="w-full xl:h-[899px] lg:h-[725px] sm:h-[710px] xs:h-[750px] bg-neon-bg">
        <div
          className="xl:h-[707px]
         xl:py-[96px] lg:py-[80px] md:py-[70px] sm:py-[60px] xs:py-[50px]"
        >
          <div className="text-center">
            <p
              className="font-bold 
            xl:text-[60px] lg:text-[55px] md:text-[44px] sm:text-[45px] xs:text-[40px]  text-black-heads"
            >
              {" "}
              Fast launch. Fast results. Here's how.
            </p>
          </div>

          <div className="mt-[59px]">
            <div className="md:w-[544.88px] h-[600px]">
              <div className="flex">
                <img src={one} alt="q" />
                <p
                  className="font-bold 
                lg:text-[36px] md:text-[32px] sm:text-[30px] xs:text-[28px] pl-[40px] text-gray-graymoney"
                >
                  Segment
                </p>
              </div>
              <div className="flex mt-[32px]">
                <img src={two} alt="q" />
                <p className="font-bold  lg:text-[36px] md:text-[32px]  sm:text-[30px]  xs:text-[28px] pl-[40px] text-gray-graymoney">
                  Design
                </p>
              </div>
              <div className="flex mt-[32px]">
                <img src={three} alt="q" />
                <div>
                  <p className="font-bold  lg:text-[36px] md:text-[32px]  sm:text-[30px] xs:text-[28px] pl-[40px] text-black-heads">
                    Send
                  </p>
                  <p
                    className="max-w-[420.68px] pl-[40px] h-[102px] text-gray-sub font-medium 
                  lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[14px]"
                  >
                    One-off announcements or automatically triggered flows.
                    Customers receive their personalized cards within a week.
                  </p>
                </div>
              </div>
              <div className="flex mt-[32px]">
                <img src={four} alt="q" />
                <p className="font-bold  lg:text-[36px] md:text-[32px]  sm:text-[30px] xs:text-[28px] pl-[40px] text-gray-graymoney">
                  Convert
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastLaunch;
