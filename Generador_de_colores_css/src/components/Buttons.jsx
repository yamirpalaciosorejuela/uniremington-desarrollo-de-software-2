import React, { useContext } from "react";

import { ContextProvider } from "../context/ContextProvider";
import Directions from "./Directions";

const Buttons = () => {
  const {
    state,
    ColorChangeOne,
    ColorChangeTwo,
    LinearGradient,
    RadialGradient,
    RandomColor,
    ModalOpen,
  } = useContext(ContextProvider);

  return (
    <div className="flex flex-col gap-8 items-center justify-between">
      <div className="flex gap-2">
        <button
          className={`text-2xl font-semibold py-2 px-8 border-4 rounded-full hover:bg-lightest hover:text-darkest transition duration-300 ${
            state.LinearGradient
              ? "bg-lightest text-darkest"
              : "text-lightest bg-none"
          }`}
          onClick={LinearGradient}
        >
          Linear
        </button>
        <button
          className={`text-2xl font-semibold py-2 px-8 border-4 rounded-full hover:bg-lightest hover:text-darkest transition duration-300 ${
            state.RadialGradient
              ? "bg-lightest text-darkest"
              : "text-lightest bg-none"
          }`}
          onClick={RadialGradient}
        >
          Radial
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-8">
          <input
            value={state.ColorOne}
            onChange={ColorChangeOne}
            className="color-picker rounded-full"
            type="color"
          />
          <input
            value={state.ColorTwo}
            onChange={ColorChangeTwo}
            className="color-picker rounded-full"
            type="color"
          />
        </div>
        <button
          onClick={RandomColor}
          className="text-lightest text-2xl font-semibold mt-8"
        >
          <span className="py-3 px-12 border-4 rounded-full hover:bg-lightest hover:text-darkest transition duration-500">
          Random
          </span>
        </button>

        <Directions />

        <button
          onClick={ModalOpen}
          className="text-lightest text-2xl font-semibold"
        >
          <span className="py-3 px-16 bg-mid rounded-full  hover:bg-lightest hover:text-darkest transition duration-500">
          Get CSS
          </span>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
