import React, { useContext } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Buttons from "./Buttons";
import { ContextProvider } from "../context/ContextProvider";

const Sidebar = () => {
  const { state, SidebarOpen } =
    useContext(ContextProvider);

  return (
    <div className={`absolute flex justify-center items-center top-0 right-5 w-[372px] h-full ${state.isSidebarOpen ? 'translate-x-[100%]' : ''} transition duration-500`}>
      <div className="w-full h-[650px] flex flex-col items-center justify-between rounded-[4rem] bg-darkest py-5">
        <span className="text-lightest text-3xl">
          <a href="https://github.com/yamirpalaciosorejuela/uniremington-desarrollo-de-software-2" target="about_blank">
            <AiFillGithub />
          </a>
        </span>
        <Buttons />

        <div className="flex gap-3 items-center">
          <span className="text-lightest text-xl font-medium">By</span>
          <span className="text-lightest text-xl font-medium">
            <BsFillHeartFill />
          </span>
          <span className="text-lightest text-xl font-medium">
            Desarrollo de software 2
          </span>
        </div>
      </div>

      <div onClick={SidebarOpen} className="flex items-center gap-2 absolute bg-none right-[22.5rem] cursor-pointer w-[50px] h-[150px] transition duration-500 hover:-translate-x-2">
        <span className="flex h-[125px] w-[10px] drop-shadow-2xl shadow-black rounded-full bg-lightest "></span>
        <span className="flex h-full w-[10px] drop-shadow-2xl shadow-black rounded-full bg-lightest"></span>
      </div>
    </div>
  );
};

export default Sidebar;
