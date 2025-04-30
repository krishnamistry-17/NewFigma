import React from "react";
import twit from "../../../assets/svgs/twit.svg";
import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
const Posts = () => {
  return (
    <>
      <div className="bg-white-light w-full h-[797px]">
        <p className="text-[63px] text-center font-bold text-black-heads pt-[95px]">
          PostPilot is 🔥 for DTC
        </p>
        <div className="grid grid-cols-4  mx-[20px]">
          <div className="w-[310px] h-[268px] border border-black-darkest rounded-md">
            <img src={twit} alt="tt" />
          </div>
          <div className="w-[350px] h-[238px] border border-black-darkest rounded-md">
            <img
              src={user1}
              alt="u1
            "
            />
          </div>
          <div className="w-[350px] h-[238px] border border-black-darkest rounded-md">
            <img src={user2} alt="u2" />
          </div>
          <div className="w-[310px] h-[268px] border border-black-darkest rounded-md">
            <img src={user3} alt="u3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
