import React, { createContext, useReducer } from "react";

const ContextProvider = createContext();

// !Logica para generar color altearoreo
const getRandomColor = () => {
  const min = 75;
  const max = 250;

  let color = "#";
  for (let i = 0; i < 3; i++) {
    const hexColor = Math.floor(Math.random() * (max - min + 1) + min);
    color += hexColor.toString(16).padStart(2, "0");
  }
  return color;
};

// !Estado inicial
let initialState = {
  ColorOne: getRandomColor(),
  ColorTwo: getRandomColor(),
  LinearGradient: true,
  RadialGradient: false,
  PosInitial: "right",
  isModalOpen: false,
  isSidebarOpen: false,
};

// !Ruducer General
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR_ONE":
      return {
        ...state,
        ColorOne: action.payload,
      };
    case "CHANGE_COLOR_TWO":
      return {
        ...state,
        ColorTwo: action.payload,
      };
    case "LINEAR_GRADIENT":
      return {
        ...state,
        LinearGradient: true,
        RadialGradient: false,
      };
    case "RADIAL_GRADIENT":
      return {
        ...state,
        RadialGradient: true,
        LinearGradient: false,
      };
    case "MODAL_OPEN":
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case "SIDEBAR_OPEN":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "RANDOM_COLOR":
      return {
        ...state,
        ColorOne: getRandomColor(),
        ColorTwo: getRandomColor(),
      };
    case "POS_RIGHT":
      return {
        ...state,
        PosInitial: "right",
      };
    case "POS_LEFT":
      return {
        ...state,
        PosInitial: "left",
      };

    case "POS_TOP":
      return {
        ...state,
        PosInitial: "top",
      };

    case "POS_BOTTOM":
      return {
        ...state,
        PosInitial: "bottom",
      };
    case "POS_CENTER":
      return {
        ...state,
        PosInitial: "center",
      };
    default:
      return state;
  }
};

const ContextGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // !Funciones generales
  // *Funcion para cambiar el Input de Color
  const ColorChangeOne = (event) => {
    dispatch({ type: "CHANGE_COLOR_ONE", payload: event.target.value });
  };
  const ColorChangeTwo = (event) => {
    dispatch({ type: "CHANGE_COLOR_TWO", payload: event.target.value });
  };

  // *Funcion para ajustar el angulo del gradiente
  const LinearGradient = () => {
    dispatch({ type: "LINEAR_GRADIENT" });
    dispatch({ type: "POS_RIGHT" });
  };
  const RadialGradient = () => {
    dispatch({ type: "RADIAL_GRADIENT" });
    dispatch({ type: "POS_CENTER" });
  };

  // *Funcion para establecer un gradiente aleatoreo
  const RandomColor = () => {
    dispatch({ type: "RANDOM_COLOR" });
  };

  // *Funciones para cambiar la posicion del gradiente
  const PosRight = () => {
    dispatch({ type: "POS_RIGHT" });
  };
  const PosLeft = () => {
    dispatch({ type: "POS_LEFT" });
  };
  const PosTop = () => {
    dispatch({ type: "POS_TOP" });
  };
  const PosBottom = () => {
    dispatch({ type: "POS_BOTTOM" });
  };
  const PosCenter = () => {
    dispatch({ type: "POS_CENTER" });
  };

  // *Funcion para alternar el Modal
  const ModalOpen = () => {
    dispatch({ type: "MODAL_OPEN" });
  };

  // *Funcion para alternar el sidebar
  const SidebarOpen = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };

  return (
    <ContextProvider.Provider
      value={{
        state,
        dispatch,
        ColorChangeOne,
        ColorChangeTwo,
        LinearGradient,
        RadialGradient,
        RandomColor,
        PosRight,
        PosLeft,
        PosTop,
        PosBottom,
        PosCenter,
        ModalOpen,
        SidebarOpen,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export { ContextProvider, ContextGlobalProvider };
