import React from "react";
import image3 from "../../../assets/images/bgimage3.png";
import image4 from "../../../assets/images/bgimage4.png";
import image5 from "../../../assets/images/bgimage5.png";
import image6 from "../../../assets/images/bgimage6.png";
import second from "../../../assets/images/second.png";
import first from "../../../assets/images/first.png";
import third from "../../../assets/images/third.png";
import four from "../../../assets/images/four.png";
const Brand = () => {
  return (
    <>
      <div className="w-full h-[666.5px] bg-white-light font-inter">
        <div className="px-[394.5px] pt-[106px]">
          <p className="font-bold text-[63px] max-w-[600px] h-[157px]">
            Trusted by thousands of top DTC brands.
          </p>
        </div>
        <div className="mx-[35px] mt-[58px] grid grid-cols-4">
          <div>
            <img src={image3} alt="i3" />
          </div>
          <div>
            <img src={image4} alt="i4" />
          </div>
          <div>
            <img src={image5} alt="i5" />
          </div>
          <div>
            <img src={image6} alt="i6" />
          </div>
        </div>
        <div className="ml-[66px] mt-[24px] grid grid-cols-4">
          <img src={first} alt="fi" />
          <img src={second} alt="s" />
          <img src={third} alt="th" className="ml-[30px]" />
          <img src={four} alt="fo" className="ml-[80px]" />
        </div>
      </div>
    </>
  );
};

export default Brand;
