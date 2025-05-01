import React from "react";
import twit from "../../../assets/svgs/twit.svg";
import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
const Posts = () => {
  return (
    <>
      <div className="bg-white-light w-full xl:h-[700px] lg:h-[900px] md:h-[966px] sm:h-[1422px] xs:h-[1420px] ">
        <p
          className="
        xl:text-[63px] lg:text-[51px] md:text-[45px] sm:text-[40px] xs:text-[35px]
        text-center font-bold text-black-heads pt-[95px]"
        >
          PostPilot is 🔥 for DTC
        </p>
        <div className=" justify-center items-center flex">
          <div
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 md:overflow-x-hidden
        xl:gap-[20px] lg:gap-[32px] md:gap-[20px] sm:gap-[20px] xs:gap-[20px] 
        xl:mx-[3px] lg:mx-[10px] md:mx-[40px] sm:mx-[90px] xs:mx-[17px]"
          >
            <div
              className="
          xl:w-[340px] xl:h-[268px] 
          lg:w-[300px] lg:h-[265px]
          md:w-[295px] md:h-[290px]
          sm:w-[290px] sm:h-[285px]
           xs:w-[285px] xs:h-[290px]
          border border-black-darkest rounded-md"
            >
              <div className="sm:w-[342px]  h-[64px] mt-[34px] mx-[34px] flex">
                <div className="flex">
                  <img
                    src={user3}
                    alt="u3
            "
                  />
                  <div className="ml-[16px]">
                    <p className="font-medium pt-[12px] text-[15px] text-black-heads">
                      John Tucker
                    </p>
                    <p className="font-medium text-[14px] text-gray-sub">
                      @JonTuckerUSA
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={twit}
                    alt="t"
                    className="xl:pl-[63.08px] lg:pl-[28px] md:pl-[20px] sm:pl-[20px] sm:ml-[0px] xs:ml-[53px] my-[16px]"
                  />
                </div>
              </div>
              <div className="mx-[34px] mt-[16px]">
                <p className="font-medium text-[16px] text-gray-sub">
                  Email is a killer channel, but if you layer in postal mail you
                  can really supercharge results. The team at @getpostpilot will
                  spark ideas for ya.
                </p>
                <p className="font-medium text-[16px] text-gray-sub lg:pl-[35px] pl-[15px]">
                  <b>@getpostpilot. </b>Killer tool.
                </p>
              </div>
            </div>
            <div
              className="xl:w-[350px] xl:h-[238px]
          lg:w-[300px] lg:h-[265px]
          md:w-[295px] md:h-[290px]
           sm:w-[290px] sm:h-[255px]
           xs:w-[285px] xs:h-[250px] xl:ml-[-20px]
          border border-black-darkest rounded-md"
            >
              <div className="sm:w-[342px] h-[64px] mt-[34px] mx-[34px] flex">
                <div className="flex">
                  <img
                    src={user1}
                    alt="u1
            "
                  />
                  <div className="ml-[16px]">
                    <p className="font-medium pt-[12px] text-[15px] text-black-heads">
                      Helen Guo
                    </p>
                    <p className="font-medium text-[14px] text-gray-sub">
                      @HelenGuo_
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={twit}
                    alt="t"
                    className="xl:pl-[93.08px] lg:pl-[38px] md:pl-[30px] sm:pl-[30px] sm:ml-[0px] xs:ml-[53px] my-[16px]"
                  />
                </div>
              </div>
              <div className="mx-[34px] mt-[16px]">
                <p className="font-medium text-[16px] text-gray-sub">
                  Been using <b>PostPilot</b> for years. Good for re-engagement.
                  And you can get creative with your messaging.
                </p>
              </div>
            </div>

            <div
              className="
          xl:w-[350px] xl:h-[238px]
          lg:w-[300px] lg:h-[265px]
          md:w-[295px] md:h-[290px]
          sm:w-[290px] sm:h-[255px]
          xs:w-[285px] xs:h-[250px]
          border border-black-darkest rounded-md"
            >
              <div className="sm:w-[342px] h-[64px] mt-[34px] mx-[34px] flex">
                <div className="flex">
                  <img src={user2} alt="u2" />
                  <div className="ml-[16px]">
                    <p className="font-medium pt-[12px] text-[15px] text-black-heads">
                      Nathan Woods
                    </p>
                    <p className="font-medium text-[14px] text-gray-sub">
                      @HeisNathan
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={twit}
                    alt="t"
                    className="xl:pl-[73.08px] lg:pl-[34px] md:pl-[20px] sm:pl-[20px] sm:ml-[0px] xs:ml-[53px] my-[16px]"
                  />
                </div>
              </div>
              <div className="mx-[34px] mt-[16px]">
                <p className="font-medium text-[16px] text-gray-sub">
                  We have done some rad winbacks to 360-720 days since purchase
                  that have rocked. <b>PostPilot</b> team is one of my favs.
                </p>
              </div>
            </div>
            <div
              className="
          xl:w-[340px] xl:h-[268px]
          lg:w-[300px] lg:h-[265px]
          md:w-[295px] md:h-[290px]
          sm:w-[290px] sm:h-[260px]
          xs:w-[285px] xs:h-[280px]
          border border-black-darkest rounded-md"
            >
              <div className="sm:w-[342px] h-[64px] mt-[34px] mx-[34px] flex">
                <div className="flex">
                  <img src={user3} alt="u3" />
                  <div className="ml-[16px]">
                    <p className="font-medium pt-[12px] text-[15px] text-black-heads">
                      Chris Lander
                    </p>
                    <p className="font-medium text-[14px] text-gray-sub">
                      @chris_basis
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={twit}
                    alt="t"
                    className="xl:*:pl-[73.08px] lg:pl-[38px] md:pl-[30px] sm:pl-[30px] sm:ml-[0px] xs:ml-[53px] my-[16px]"
                  />
                </div>
              </div>
              <div className="mx-[34px] mt-[16px]">
                <p className="font-medium text-[16px] text-gray-sub">
                  Another +1 for <b>PostPilot</b>. Have only done winbacks, but
                  it's been wonderful. Their team is also top notch. Super
                  helpful every time we set something up.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[64px] flex justify-center items-center">
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
    </>
  );
};

export default Posts;
