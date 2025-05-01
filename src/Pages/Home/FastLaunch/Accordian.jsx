import React, { useState } from "react";
import line from "../../../assets/images/line.png";
const Accordian = () => {
  const items = [
    {
      title: "01",
      content: "Segment",
      detail:
        "One-off announcements or automatically triggered flows.Customers receive their personalized cards within a week.",
    },
    {
      title: "02",
      content: "Design",
      detail:
        "One-off announcements or automatically triggered flows.Customers receive their personalized cards within a week.",
    },
    {
      title: "03",
      content: "Send",
      detail:
        "One-off announcements or automatically triggered flows.Customers receive their personalized cards within a week.",
    },
    {
      title: "04",
      content: "Convert",
      detail:
        "One-off announcements or automatically triggered flows.Customers receive their personalized cards within a week.",
    },
    // {
    //   title: "05",
    //   content: "Recive",
    //   detail:
    //     "One-off announcements or automatically triggered flows.Customers receive their personalized cards within a week.",
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(2); //by default open index 2
  console.log("activeIndex :", activeIndex);

  const handleItemClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex sm:ml-[100px] xs:ml-[50px] my-[25px]">
            <div
              className={`font-bold 
                lg:text-[36px] md:text-[32px] 
                sm:text-[30px] xs:text-[28px] 
                justify-between space-x-3
                 ${
                   activeIndex === index
                     ? "text-black-darkest"
                     : "text-gray-graymoney"
                 }  
                `}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </div>
            <div
              className={`font-bold 
                lg:text-[36px] md:text-[32px] 
                sm:text-[30px] xs:text-[28px] 
                pl-[40px]  justify-between space-x-3
                ${
                  activeIndex === index
                    ? "text-black-darkest"
                    : "text-gray-graymoney"
                }   
                `}
              onClick={() => handleItemClick(index)}
            >
              {item.content}
            </div>
          </div>
          {activeIndex === index && (
            <div className="flex">
              <div className="sm:pl-[117px] xs:pl-[64px]">
                <img src={line} alt="line" className="w-[2px] h-[96px]" />
              </div>
              <div
                className="font-medium
                  lg:text-[20px] md:text-[18px] 
                  sm:text-[16px] xs:text-[12px] sm:max-w-[540px]
                  sm:pl-[60px] xs:pl-[61px]
                  text-gray-sub"
              >
                {item.detail}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
