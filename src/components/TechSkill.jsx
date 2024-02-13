import React from "react";

const TechSkill = ({ item }) => {
  return (
    <div className="w-[190px] hover:animate-bounce hover:border-none h-[190px] flex items-center justify-center border-2 border-fuchsia-500 rounded-full">
      <img src={item} alt="" className="w-[100px] hover:w-36" />
    </div>
  );
};

export default TechSkill;
