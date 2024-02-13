import React from "react";
import TechSkill from "./TechSkill";
import {
  css,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  typescript,
} from "../assets";

const Tech = () => {
  let arr = [html, css, javascript, tailwind, typescript, reactjs, redux];

  return (
    <div className="pt-[50px] sm:py-[100px] bg-[#020617] w-full">
      <div>
        <h1 className="text-center text-5xl text-pink-500 my-[40px] font-bold">
          Skills
        </h1>
      </div>
      <div className="w-full flex flex-wrap gap-7 items-center justify-center p-3 sm:p">
        {arr.map((i) => {
          return <TechSkill item={i} key={crypto.randomUUID()} />;
        })}
      </div>
    </div>
  );
};

export default Tech;
