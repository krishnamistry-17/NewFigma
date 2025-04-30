import React from "react";
import quote from "../../../assets/images/div.png";
import obvi from "../../../assets/images/obvi.png";
import over from "../../../assets/images/over.png";
import paragone from "../../../assets/images/paragone.png";
const BigCard = () => {
  return (
    <>
      <div className="bg-cream-card lg:h-[2637.8px] md:h-[2351px] sm:h-[2200px] xs:h-[2100px] font-inter">
        <div className="xl:mx-[75px] lg:h-[2637.8px]  bg-cream-card">
          <div
            className="
          xl:px-[174.13px] xl:pt-[86px]
         lg:pl-[80px] lg:pt-[70px]
         md:pl-[80px] md:pt-[60px]
         sm:pl-[32px] sm:pt-[50px]
         xs:pl-[30px] xs:pt-[40px]
          "
          >
            <p
              className="font-bold 
            xl:text-[70px] lg:text-[58px] md:text-[45px] sm:text-[35px] xs:text-[25px] text-black-heads xl:w-[941.56px]  xl:h-[315px]"
            >
              PostPilot makes it a cinch to send personalized, profit-generating
              postcards.
            </p>
          </div>
          {/*first card */}
          <div className="firstcard">
            <div className="md:mt-[145px] sm:mt-[80px] xs:mt-[40px] h-[663.5px] ">
              <div
                className="mt-[63.25px] mb-[72.27px] 
            xl:w-[516.44px] md:h-[527.98px] xs:h-[439.98px] 
            "
              >
                <div className="xl:w-[324.18px]">
                  <p
                    className="font-bold 
                  lg:text-[54px] md:text-[45px] 
                  sm:text-[35px] xs:text-[25px] text-black-heads"
                  >
                    Powerful acquisition & retention
                  </p>
                </div>
                <div className="mt-[20px] md:w-[516.44px] h-[527.98px]">
                  <p className="md:w-[470.34px] h-[68px] font-medium lg:text-[20px] md:text-[18px] text-gray-sub ">
                    Send one-off or triggered campaigns to customers &
                    prospects. Target email leads with MailMatch™.
                  </p>

                  <div className="mt-[27px]">
                    <img
                      src={quote}
                      alt="q"
                      className=" mt-[-18px] ml-[22px] absolute"
                    />
                    <div className="border border-cream-lightborder rounded-lg md:w-[516.44px] sm:w-[400px] h-[167.98px]">
                      <p className="pl-[34px] pt-[34px] pr-[56.35px] md:w-[426.09px] h-[60px text-[16px] italic">
                        It’s like Klaviyo for direct mail. The results are
                        absolutely insane.
                      </p>
                      <div className="md:w-[448.44px] h-[23.98px] mt-[16px] ml-[34px] flex">
                        <p className="text-[14px] text-cream-lightborder font-roboto">
                          Ash Melwani, CMO
                        </p>
                        <img
                          className="md:ml-[277.06px] sm:ml-[100px] xs:ml-[50px]"
                          src={obvi}
                          alt="obv"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*second card */}
          <div className="xl:mt-[128px] mt-[50px]">
            <div className="h-[579.05px] ">
              <div className="xl:ml-[644.44px] ">
                <p
                  className="font-bold 
                xl:text-[60px] lg:text-[50px] 
                md:text-[40px] sm:text-[30px] 
                xs:text-[25px] text-black-heads xl:w-[628.58px] "
                >
                  Fight back against iOS updates, jacked-up CPCs & spam folders
                </p>
                <p
                  className="md:text-[20px] sm:text-[18px] xs:text-[15px] text-black-head pt-[31px] 
                font-medium xl:w-[604.36px] h-[68px]"
                >
                  Deliver your message to <i>all</i> of your customers — for
                  less than the cost of a click.
                </p>

                <div className="mt-[48px]">
                  <img
                    src={quote}
                    alt="q"
                    className=" mt-[-18px] ml-[22px] absolute"
                  />
                  <div
                    className="border border-cream-lightborder 
                  rounded-lg md:w-[645.56px] sm:h-[197.98px] xs:h-[257px]"
                  >
                    <p
                      className="pl-[34px] pt-[34px] pr-[47.64px]
                     xl:w-[563.92px]  text-[16px] italic"
                    >
                      PostPilot is our new weapon against sinking email
                      engagement and rising PPC costs. The results and ROI have
                      been outstanding. It’s now one of our core marketing
                      channels to increase acquisition & LTV.
                    </p>
                    <div
                      className="xl:w-[577.56px] h-[23.98px] 
                    mt-[16px] ml-[34px] flex"
                    >
                      <p className="text-[14px] text-cream-lightborder font-roboto">
                        Leah Keith, GM
                      </p>
                      <img
                        className="md:ml-[450.94px] sm:ml-[250px] xs:ml-[100px]"
                        src={over}
                        alt="obv"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Third card */}
          <div className="xl:mt-[128px] mt-[50px]">
            <div className="h-[582.25px] ">
              <div className="">
                <p className="font-bold md:text-[58px] sm:text-[45px] xs:text-[35px] text-black-heads  ">
                  Done for you
                </p>
                <p
                  className="sm:text-[20px] text-[17px] text-black-head pt-[25px] font-medium 
                sm:w-[482.70px] h-[68px]"
                >
                  From design & strategy to stamp-licking, our ecom experts help
                  you every step of the way.
                </p>

                <div className="mt-[48px]">
                  <img
                    src={quote}
                    alt="q"
                    className=" mt-[-18px] ml-[22px] absolute"
                  />
                  <div
                    className="border border-cream-lightborder rounded-lg 
                  md:w-[516.44px] h-[227.98px]"
                  >
                    <p
                      className="pl-[34px] pt-[34px] pr-[69.71x]
                     sm:w-[412.73px] text-[16px] italic"
                    >
                      The team is so knowledgeable and beyond helpful. I’m blown
                      away by their communication, detail, and attentiveness and
                      always feel like they have our best interest in mind.
                      Definitely worth a try.
                    </p>
                    <div className="sm:w-[448.44px] h-[23.98px] mt-[16px] ml-[34px] flex">
                      <p className="text-[14px] text-cream-lightborder font-roboto">
                        Holly Davies, Marketing Director
                      </p>
                      <img
                        className="sm:ml-[161.64px] ml-[5px]"
                        src={paragone}
                        alt="obv"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[48px]">
                  <button
                    className="md:w-[261.05px] sm:w-[250px] xs:w-[172px] h-[64px] bg-orange-dark
                 text-[13px] font-bold text-white-light md:px-[65px] sm:px-[50px] py-[22px]
                 border rounded-full border-black-darkborder  border-r-[7px] border-b-[5px]
                 "
                  >
                    TRY IT RISK FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCard;
