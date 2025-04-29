import React from "react";
import star from "../../../assets/svgs/star.svg";
import image1 from "../../../assets/images/bgimage1.png";
import image2 from "../../../assets/images/bgimage2.png";
const Card = () => {
  return (
    <>
      <div className="bg-sky-bg w-full h-[756px]">
        <div className="mx-[75px] py-[128px] h-[500px] w-[1290px] font-inter flex">
          <div className="w-[793.84px] h-[500px]">
            <p className="font-bold text-[82px] text-black-heads max-w-[779px]">
              Meet your favorite new (old) marketing channel.
            </p>
            <p className="max-w-[553.97px] h-[68px] text-[20px] text-gray-sub pt-[25px]">
              Remarkable results. Easier than email. Postcard marketing
              reinvented for modern ecommerce.
            </p>
            <div className="flex mt-[48px]">
              <div>
                <button
                  className="w-[261.05px] h-[64px] bg-orange-dark
                 text-[13px] font-bold text-white-light px-[65px] py-[22px]
                 border rounded-full border-black-darkborder  border-r-[7px] border-b-[5px]
                 "
                >
                  TRY IT RISK FREE
                </button>
              </div>
              <div className="ml-[40px] my-[5.58px]">
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
                <p className="pt-[4px] text-[16px] text-black-darkborder">
                  5.0 Shopify Rating
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[-19px]">
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
