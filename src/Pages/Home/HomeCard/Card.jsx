import React from "react";
import star from "../../../assets/svgs/star.svg";
import image1 from "../../../assets/images/bgimage1.png";
import image2 from "../../../assets/images/bgimage2.png";
const Card = () => {
  return (
    <>
      <div className="bg-sky-bg w-full md:h-[756px] sm:h-[495px] xs:h-[435px]">
        <div
          className="
        xl:mx-[75px] lg:mx-[60px] md:mx-[30px] sm:mx-[10px] xs:mx-[17px]
        xl:py-[128px] lg:py-[100px] md:py-[80px] sm:py-[50px] xs:py-[32px]
        h-[500px] xl:w-[1290px] font-inter flex"
        >
          <div className="xl:w-[793.84px] xl:h-[500px]">
            <p
              className="font-bold 
            xl:text-[82px] lg:text-[70px] 
            md:text-[60px] sm:text-[32px] xs:text-[28px] text-black-heads md:max-w-[779px]"
            >
              Meet your favorite new (old) marketing channel.
            </p>
            <p
              className="md:max-w-[553.97px] md:h-[68px] 
            md:text-[20px] sm:text-[17px] xs:text-[16px] text-gray-sub pt-[25px]"
            >
              Remarkable results. Easier than email. Postcard marketing
              reinvented for modern ecommerce.
            </p>

            <div className="sm:flex hidden mt-[48px]">
              <div>
                <button
                  className="md:w-[261.05px] sm:w-[181.65px] xs:w-[141.84px] sm:h-[64px] xs:h-[60px] bg-orange-dark
                 text-[13px] font-bold text-white-light md:px-[65px] sm:px-[22px] py-[22px]
                 border rounded-full border-black-darkborder  border-r-[7px] border-b-[5px]
                 "
                >
                  TRY IT RISK FREE
                </button>
              </div>
              <div className="md:ml-[40px] sm:ml-[8px] xs:ml-[5px] my-[5.58px]">
                <div className="flex">
                  <img src={star} alt="str" className="w-[24px] h-[24px]" />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                </div>
                <p className="pt-[4px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-black-darkborder">
                  5.0 Shopify Rating
                </p>
              </div>
            </div>

            <div className=" sm:hidden mt-[48px]">
              <div className="xs:ml-[5px] mt-[-20px]">
                <div className="flex">
                  <img src={star} alt="str" className="w-[24px] h-[24px]" />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                  <img
                    src={star}
                    alt="str"
                    className="w-[24px] h-[24px] ml-[4px]"
                  />
                </div>
                <p className="pt-[4px] xs:text-[12px] text-black-darkborder">
                  5.0 Shopify Rating
                </p>
              </div>
              <div className=" mt-[18px] ">
                <button
                  className="xs:w-[155.84px]  xs:h-[54px] bg-orange-dark
                 text-[13px] font-bold text-white-light py-[15px]
                 border rounded-full border-black-darkborder  border-r-[7px] border-b-[5px]
                 "
                >
                  TRY IT RISK FREE
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[-19px] sm:block hidden">
            <div className=" absolute ">
              <img src={image1} alt="i1"></img>
            </div>
            <div className=" relative">
              <img src={image2} alt="i2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
