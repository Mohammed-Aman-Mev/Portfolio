import React from "react";
import { useState } from "react";
import logo1 from "../assets/mylogo/logo-1.svg";
import { close, menu } from "../assets";
import { motion, spring } from "framer-motion";

const Navbar = () => {
  const link = [
    { id: "About", title: "About", index: 1 },
    { id: "Projects", title: "Projects", index: 2 },
    { id: "Contact", title: "Contact", index: 3 },
  ];

  const [toggle, setToggle] = useState(false);

  const [active, setActive] = useState("");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", delay: 1 }}
      className="w-[100%] h-auto flex items-center py-4 sticky top-0 bg-primary z-10 px-8"
    >
      <div className="flex items-center justify-between w-full px-9">
        <div className="flex gap-4">
          <img src={logo1} alt="" className="w-9 " />
          <ul className="flex flex-col">
            <li>
              <p className="sm:bold sm:text-lg sm:font-medium">
                Mohammed Aman Mev
              </p>
            </li>
            <li>
              <p className="sm:bold sm:text-lg sm:font-medium">
                Front<span>end-developer</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="gap-7 hidden sm:flex">
            {link.map((link) => (
              <li
                key={link.index}
                className={`${
                  active === link.title ? "text-white" : "text-slate-500"
                } hover:text-white text-[18px]`}
                onClick={() => {
                  setActive(link.title);
                  window.scroll(0, 0);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="overflow-auto sm:hidden">
            <img
              src={toggle ? close : menu}
              alt=""
              className=""
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } w- h-[100px] items-end bg-slate-200 z-10 absolute right-10 p-1 bg-gradient-to-b from-violet-800 via-cyan-400 to-purple-300 rounded-md`}
            >
              <ul className="gap-1 flex flex-col">
                {link.map((link) => (
                  <li
                    key={link.index}
                    className={`${
                      active === link.title ? "text-white" : "text-slate-700"
                    } hover:text-white text-[18px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
