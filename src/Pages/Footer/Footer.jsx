import React from "react";
import eco from "../../assets/images/eco.png";
import email from "../../assets/svgs/email.svg";
import logo from "../../assets/svgs/Logo.svg";
const Footer = () => {
  return (
    <>
      <div className="bg-white-light w-full h-[572.64px]">
        <div className="xl:mx-[75px] lg:mx-[40px] md:mx-[30px] sm:mx-[30px] xs:mx-[20px] mt-[96px]">
          <div
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 
          xl:gap-[128px] lg:gap-[20px] md:gap-[30px]"
          >
            <div>
              <img src={eco} alt="e" className="w-[112px] h-[109px]" />
              <p className="font-medium text-[14px] text-gray-sub lg:pt-[25px] md:pt-[18px] pt-[25px]">
                Our paper is sourced from FSC-certified mills. We plant enough
                trees to more than double our paper usage.
              </p>
            </div>
            <div>
              <p className="font-bold text-[13px] md:pt-[0px] sm:pt-[25px] xs:pt-[25px] text-black-heads">
                COMPANY
              </p>
              <p className="font-medium text-[16px] text-black-heads md:pt-[27px] sm:pt-[10px] xs:pt-[13px]">
                About us
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[16px]">
                Partner program
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[16px]">
                Career
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[16px]">
                Contact us
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[16px]">
                Privacy Policy
              </p>
            </div>
            <div>
              <p className="font-medium text-[16px] text-black-heads pt-[44px]">
                Pricing
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[13px]">
                Reviews
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[13px]">
                Direct Mail Academy
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[13px]">
                Success stories
              </p>
              <p className="font-medium text-[16px] text-black-heads pt-[13px]">
                Terms & conditions
              </p>
            </div>
            <div>
              <p className="font-bold text-[12px] md:pt-[0px] sm:pt-[35px] xs:pt-[49px] text-black-heads">
                CONTACT
              </p>
              <div className="flex md:mt-[27px] sm:mt-[20px] xs:mt-[10px]">
                <img src={email} alt="em" />
                <p className="font-medium text-[15px] text-black-heads pl-[10px]">
                  support@postpilot.com
                </p>
              </div>
              <p className="font-medium text-[16px] text-gray-sub md:pt-[26px] sm:pt-[13px] xs:pt-[11px]">
                Printed with ❤️️️ at our facility in South Carolina.
              </p>
            </div>
          </div>
          <hr className="xl:mt-[96px] mt-[20px]" />
          <div className="sm:flex">
            <div className="my-[49px]">
              <img src={logo} alt="l" />
              <p className="font-medium text-[14px] text-gray-sub pt-[9px]">
                © 2022 PostPilot, Inc. All rights reserved.
              </p>
            </div>
            <div className="sm:mt-[49px] xl:ml-[777px] lg:ml-[344px] md:ml-[255px] sm:ml-[64px] xs:ml-[3px]">
              <div className="flex">
                <button
                  className="
                lg:w-[83.84px] md:w-[80px] 
                sm:w-[81.84px] xs:w-[71.84px] h-[44px]
                 bg-white-light  lg:px-[22px] md:px-[18px] lg:py-[6px] md:py-[10px]
              rounded-full border border-black-darkborder font-medium text-[15px]
               border-r-black-darkborder border-r-[7px] border-b-[5px] drop-shadow-2xl"
                >
                  Login
                </button>
                <button
                  className="font-medium xl:text-[14px] md:text-[13px] text-[13px] text-white-light ml-[16px]
                xl:w-[136.86px] lg:w-[140px] md:w-[130px] sm:w-[120.84px] xs:w-[120.84px] h-[44px]
                 bg-orange-dark xl:px-[20px] lg:py-[14px] md:py-[10px]
                 rounded-full border-black-darkborder border-r-[7px] border-b-[5px] 
                "
                >
                  Try it for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
