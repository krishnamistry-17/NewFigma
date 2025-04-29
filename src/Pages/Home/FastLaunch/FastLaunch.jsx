import React from "react";
import one from "../../../assets/images/div1.png";
import two from "../../../assets/images/div2.png";
import three from "../../../assets/images/div3.png";
import four from "../../../assets/images/div4.png";
import five from "../../../assets/images/div5.png";
const FastLaunch = () => {
  return (
    <>
      <div className="w-full h-[899px] bg-neon-bg">
        <div className="mx-[75px] py-[96px]  h-[707px]  ">
          <div className="text-center">
            <p className="font-bold pl-[304.61px] text-[60px] text-center text-black-heads max-w-[988px]">
              Fast launch. Fast results. Here's how.
            </p>
          </div>
          <div className="mt-[59px]">
            <div className="w-[544.88px] h-[600px]">
              <div className="flex">
                <img src={one} alt="q" />
                <p className="font-bold text-[36px] pl-[40px] text-gray-graymoney">
                  Segment
                </p>
              </div>
              <div className="flex mt-[32px]">
                <img src={two} alt="q" />
                <p className="font-bold text-[36px] pl-[40px] text-gray-graymoney">
                  Design
                </p>
              </div>
              <div className="flex mt-[32px]">
                <img src={three} alt="q" />
                <div>
                  <p className="font-bold text-[36px] pl-[40px] text-black-heads">
                    Send
                  </p>
                  <p className="max-w-[420.68px] pl-[40px] h-[102px] text-gray-sub font-medium text-[20px]">
                    One-off announcements or automatically triggered flows.
                    Customers receive their personalized cards within a week.
                  </p>
                </div>
              </div>
              <div className="flex mt-[32px]">
                <img src={four} alt="q" />
                <p className="font-bold text-[36px] pl-[40px] text-gray-graymoney">
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
