import React from "react";
import logo from "../../assets/svgs/Logo.svg";
import arrow from "../../assets/svgs/downarrow.svg";

const Header = () => {
  return (
    <>
      <div className="w-full h-[65px] bg-white-light">
        <div className="flex ml-[75px]">
          <img src={logo} alt="logo" className="my-[27.5px]"></img>
          <div className="flex ml-[336.45px] mt-[14.5px] font-inter">
            <div className="flex">
              <p className="font-medium text-[14px] py-[19px] text-black-head">
                Resources
              </p>
              <img
                src={arrow}
                alt="aro"
                className="w-[10px] h-[6px] my-[25px] ml-[10px]"
              />
              <p className="pl-[19px] text-black-heads font-medium text-[14px] py-[19px]">
                Success stories
              </p>
              <div className="flex">
                <p className="pl-[20.47px] py-[19px] font-medium text-[15px] text-black-head">
                  Company
                </p>
                <img
                  src={arrow}
                  alt="aro"
                  className="w-[10px] h-[6px] my-[25px] ml-[10px]"
                />
              </div>
              <p className="font-medium text-[14px] text-black-heads pl-[19px] pr-[38px] py-[19px]">
                Pricing
              </p>
            </div>
            <div className="flex">
              <div className="ml-[19px] my-[6px]">
                <button
                  className="w-[83.84px] h-[44px] bg-white-light  px-[22px] py-[6px]
              rounded-full border border-black-darkborder font-medium text-[15px]
               border-r-black-darkborder border-r-[7px] border-b-[5px] drop-shadow-2xl"
                >
                  Login
                </button>
              </div>
              <div className="ml-[16px] my-[6px]">
                <button
                  className="font-medium text-[14px] text-white-light
                w-[184.86px] h-[44px] bg-orange-dark px-[25px] py-[14px]
                 rounded-full border-black-darkborder border-r-[7px] border-b-[5px] 
                "
                >
                  Create free account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
