import React from "react";

const Posts = () => {
  return (
    <>
      <div className="bg-white-light w-full h-[797px]">
        <p className="text-[63px] text-center font-bold text-black-heads pt-[95px]">
          PostPilot is 🔥 for DTC
        </p>
        <div className="grid grid-cols-4  mx-[20px]">
          <div className="w-[310px] h-[268px] border border-black-darkest rounded-md"></div>
          <div className="w-[350px] h-[238px] border border-black-darkest rounded-md"></div>
          <div className="w-[350px] h-[238px] border border-black-darkest rounded-md"></div>
          <div className="w-[310px] h-[268px] border border-black-darkest rounded-md"></div>
        </div>
      </div>
    </>
  );
};

export default Posts;

{/*https://github.com/krishnamistry-17/NewFigma.git 
// 
// echo "# NewFigma" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/krishnamistry-17/NewFigma.git
git push -u origin main*/}