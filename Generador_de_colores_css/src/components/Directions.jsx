import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

const Directions = () => {
  const { state, PosRight, PosLeft, PosTop, PosCenter, PosBottom } =
    useContext(ContextProvider);

  return (
    <div className="flex gap-2 justify-center my-6">
      <button
        onClick={PosBottom}
        className={`w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full hover:scale-110 transition duration-500 ${
          state.PosInitial === "bottom"
            ? "bg-lightest text-darkest"
            : "bg-mid text-lightest"
        }`}
      >
        <AiOutlineArrowDown />
      </button>
      <button
        onClick={PosLeft}
        className={`w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full hover:scale-110 transition duration-500 ${
          state.PosInitial === "left"
            ? "bg-lightest text-darkest"
            : "bg-mid text-lightest"
        }`}
      >
        <AiOutlineArrowLeft />
      </button>
      {state.RadialGradient ? (
        <button
          onClick={PosCenter}
          className={`w-[50px] h-[50px] flex justify-center items-center text-3xl rounded-full hover:scale-110 transition duration-300 ${
            state.PosInitial === "center"
              ? "bg-lightest text-darkest"
              : "bg-mid text-lightest"
          }`}
        >
          <BiCircle />
        </button>
      ) : (
        ""
      )}
      <button
        onClick={PosRight}
        className={`w-[50px] h-[50px] flex justify-center items-center text-3xl  rounded-full hover:scale-110 transition duration-300 ${
          state.PosInitial === "right"
            ? "bg-lightest text-darkest"
            : "bg-mid text-lightest"
        }`}
      >
        <AiOutlineArrowRight />
      </button>
      <button
        onClick={PosTop}
        className={`w-[50px] h-[50px] flex justify-center items-center text-3xl  rounded-full hover:scale-110 transition duration-300 ${
          state.PosInitial === "top"
            ? "bg-lightest text-darkest"
            : "bg-mid text-lightest"
        }`}
      >
        <AiOutlineArrowUp />
      </button>

      
    </div>
  );
};

export default Directions;
