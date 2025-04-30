import React from "react";
import five from "../../../assets/images/five.png";
const Days = () => {
  return (
    <>
      <div className="bg-green-lightbg w-full sm:h-[643.09px] xs:h-[352px] font-inter">
        <div className="xl:mx-[208px] lg:mx-[208px] md:mx-[150px] sm:mx-[30px] xs:mx-[20px]">
          <div className="xl:px-[210.7px] sm:pb-[58px] xs:pb-[25px]">
            <p
              className="font-bold lg:text-[63px] md:text-[49px] sm:text-[42px] xs:text-[26px] text-black-heads 
            xl:w-[603px] xl:h-[157px]  xl:pt-[106px] lg:pt-[100px] md:pt-[80px] sm:pt-[70px] xs:pt-[50px]"
            >
              Why use direct mail? It works like crazy.
            </p>
          </div>

          <div className="h-[226.09px]  flex xl:mt-[110px]  ">
            <div className="xl:my-[52.05px] w-[220px] h-[122px]">
              <p className="font-bold md:text-[63px] sm:text-[35px] xs:text-[25px] text-black-heads">
                28X
              </p>
              <p className="font-medium text-[14px] text-gray-sub">
                Higher response rate than email & digital
              </p>
            </div>
            <div className="xl:ml-[170px] lg:ml-[50px] md:ml-[40px] sm:ml-[30px] xs:ml-[12px]">
              <img src={five} alt="fi" />
              <p className="text-[14px] text-gray-sub pt-[5px] lg:px-[33.7px]">
                Your messages get read
              </p>
            </div>
            <div className="xl:ml-[170px] lg:ml-[15px] md:ml-[40px] sm:ml-[20px]  xs:ml-[10px] xl:my-[52.05px] xl:w-[228px] xl:h-[122px]">
              <p className="font-bold xl:text-[62px] lg:text-[50px] md:text-[45px] sm:text-[35px] xs:text-[25px] text-black-heads">
                17 Days
              </p>
              <p className="font-medium text-[14px] text-gray-sub lg:px-[27.89px]">
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
