import React, { useContext } from "react";
import { ContextProvider } from "./context/ContextProvider";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

function App() {
  const { state } = useContext(ContextProvider);

  let gradientStyle = {
    background: state.LinearGradient
      ? `linear-gradient(to ${state.PosInitial}, ${state.ColorOne}, ${state.ColorTwo})`
      : `radial-gradient(circle at ${state.PosInitial}, ${state.ColorOne}, ${state.ColorTwo})`,
  };

  return (
    <div
      style={gradientStyle}
      className="relative overflow-hidden w-full h-screen"
    >
      <Sidebar />
      <Modal />
    </div>
  );
}

export default App;
