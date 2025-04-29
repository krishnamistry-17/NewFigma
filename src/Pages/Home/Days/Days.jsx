import React from "react";
import five from "../../../assets/images/five.png";
const Days = () => {
  return (
    <>
      <div className="bg-green-lightbg w-full h-[643.09px] font-inter">
        <div className="mx-[208px] ">
          <div className="px-[210.7px] pb-[58px]">
            <p className="font-bold text-[63px] text-black-heads w-[603px] h-[157px]  pt-[106px]">
              Why use direct mail? It works like crazy.
            </p>
          </div>

          <div className="h-[226.09px] flex mt-[110px] ">
            <div className="my-[52.05px] w-[220px] h-[122px]">
              <p className="font-bold text-[63px] text-black-heads">28X</p>
              <p className="font-medium text-[14px] text-gray-sub">
                Higher response rate than email & digital
              </p>
            </div>
            <div className="ml-[170px]">
              <img src={five} alt="fi" />
              <p className="text-[14px] text-gray-sub pt-[5px] px-[33.7px]">
                Your messages get read
              </p>
            </div>
            <div className="ml-[170px] my-[52.05px] w-[228px] h-[122px]">
              <p className="font-bold text-[62px] text-black-heads">17 Days</p>
              <p className="font-medium text-[14px] text-gray-sub px-[27.89px]">
                Lifespan of a postcard vs. seconds for email or SMS
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Days;
