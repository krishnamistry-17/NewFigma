import React from "react";
import quote from "../../../assets/images/div.png";
import obvi from "../../../assets/images/obvi.png";
import over from "../../../assets/images/over.png";
import paragone from "../../../assets/images/paragone.png";
const BigCard = () => {
  return (
    <>
      <div className="bg-cream-card h-[2637.8px] font-inter">
        <div className="mx-[75px] h-[2637.8px]  bg-cream-card">
          <div className="px-[174.13px] pt-[86px]">
            <p className="font-bold text-[70px] text-black-heads w-[941.56px] h-[315px] text-center">
              PostPilot makes it a cinch to send personalized, profit-generating
              postcards.
            </p>
          </div>
          {/*first card */}
          <div className="firstcard">
            <div className="mt-[145px] h-[663.5px] ">
              <div
                className="mt-[63.25px] mb-[72.27px] 
            w-[516.44px] h-[527.98px]
            "
              >
                <div className="w-[324.18px]">
                  <p className="font-bold text-[54px] text-black-heads">
                    Powerful acquisition & retention
                  </p>
                </div>
                <div className="mt-[20px] w-[516.44px] h-[527.98px]">
                  <p className="w-[470.34px] h-[68px] font-medium text-[20px] text-gray-sub ">
                    Send one-off or triggered campaigns to customers &
                    prospects. Target email leads with MailMatch™.
                  </p>

                  <div className="mt-[27px]">
                    <img
                      src={quote}
                      alt="q"
                      className=" mt-[-18px] ml-[22px] absolute"
                    />
                    <div className="border border-cream-lightborder rounded-lg w-[516.44px] h-[167.98px]">
                      <p className="pl-[34px] pt-[34px] pr-[56.35px] w-[426.09px] h-[60px text-[16px] italic">
                        It’s like Klaviyo for direct mail. The results are
                        absolutely insane.
                      </p>
                      <div className="w-[448.44px] h-[23.98px] mt-[16px] ml-[34px] flex">
                        <p className="text-[14px] text-cream-lightborder font-roboto">
                          Ash Melwani, CMO
                        </p>
                        <img className="ml-[277.06px]" src={obvi} alt="obv" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*second card */}
          <div className=" mt-[128px]">
            <div className="h-[579.05px]">
              <div className="ml-[644.44px]">
                <p className="font-bold text-[60px] text-black-heads w-[628.58px] ">
                  Fight back against iOS updates, jacked-up CPCs & spam folders
                </p>
                <p className="text-[20px] text-black-head pt-[31px] font-medium w-[604.36px] h-[68px]">
                  Deliver your message to <i>all</i> of your customers — for
                  less than the cost of a click.
                </p>

                <div className="mt-[48px]">
                  <img
                    src={quote}
                    alt="q"
                    className=" mt-[-18px] ml-[22px] absolute"
                  />
                  <div className="border border-cream-lightborder rounded-lg w-[645.56px] h-[197.98px]">
                    <p
                      className="pl-[34px] pt-[34px] pr-[47.64px]
                     w-[563.92px]  text-[16px] italic"
                    >
                      PostPilot is our new weapon against sinking email
                      engagement and rising PPC costs. The results and ROI have
                      been outstanding. It’s now one of our core marketing
                      channels to increase acquisition & LTV.
                    </p>
                    <div className="w-[577.56px] h-[23.98px] mt-[16px] ml-[34px] flex">
                      <p className="text-[14px] text-cream-lightborder font-roboto">
                        Leah Keith, GM
                      </p>
                      <img className="ml-[450.94px]" src={over} alt="obv" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Third card */}
          <div className=" mt-[128px] ">
            <div className="h-[582.25px]">
              <div>
                <p className="font-bold text-[58px] text-black-heads  ">
                  Done for you
                </p>
                <p className="text-[20px] text-black-head pt-[25px] font-medium w-[482.70px] h-[68px]">
                  From design & strategy to stamp-licking, our ecom experts help
                  you every step of the way.
                </p>

                <div className="mt-[48px]">
                  <img
                    src={quote}
                    alt="q"
                    className=" mt-[-18px] ml-[22px] absolute"
                  />
                  <div className="border border-cream-lightborder rounded-lg w-[516.44px] h-[227.98px]">
                    <p
                      className="pl-[34px] pt-[34px] pr-[69.71x]
                     w-[412.73px] text-[16px] italic"
                    >
                      The team is so knowledgeable and beyond helpful. I’m blown
                      away by their communication, detail, and attentiveness and
                      always feel like they have our best interest in mind.
                      Definitely worth a try.
                    </p>
                    <div className="w-[448.44px] h-[23.98px] mt-[16px] ml-[34px] flex">
                      <p className="text-[14px] text-cream-lightborder font-roboto">
                        Holly Davies, Marketing Director
                      </p>
                      <img className="ml-[161.64px]" src={paragone} alt="obv" />
                    </div>
                  </div>
                </div>
                <div className="mt-[48px]">
                  <button
                    className="w-[261.05px] h-[64px] bg-orange-dark
                 text-[13px] font-bold text-white-light px-[65px] py-[22px]
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
