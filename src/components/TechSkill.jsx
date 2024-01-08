import React from "react";

const TechSkill = ({ item }) => {
  return (
    <div className="w-[190px] h-[190px] flex items-center justify-center border-2 border-fuchsia-500 rounded-full">
      <img src={item} alt="" className="w-[100px]" />
    </div>
  );
};

export default TechSkill;
