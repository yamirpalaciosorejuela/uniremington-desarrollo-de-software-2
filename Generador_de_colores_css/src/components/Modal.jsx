import React, { useContext } from "react";
import { ContextProvider } from "../context/ContextProvider";
import { FaTimes } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { notifications } from "@mantine/notifications";

const Modal = () => {
  const { state, ModalOpen } = useContext(ContextProvider);

  let gradientStyle = {
    background: state.LinearGradient
      ? `linear-gradient(to ${state.PosInitial}, ${state.ColorOne}, ${state.ColorTwo})`
      : `radial-gradient(circle at ${state.PosInitial}, ${state.ColorOne}, ${state.ColorTwo})`,
  };

  // Funcion para copiar el codigo generado y mostrar un Toast confirmando que se ha copiado correctamente
  const copyToClipboard = () => {
    const code = `background: #9ca965;\nbackground: ${gradientStyle.background};`;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        notifications.show({
          title: "Copiado",
          message: "El codigo CSS ha sido copiado",
          color: "green",
          icon: <AiOutlineCheck />,
          autoClose: 1000,
          styles: (theme) => ({
            root: {
              backgroundColor: "#070616",
              "&::before": { backgroundColor: theme.white },
            },
            title: { color: theme.white },
            description: { color: theme.white },
            closeButton: {
              color: theme.white,
              "&:hover": { backgroundColor: "#171435" },
            },
          }),
        });
      })
      .catch((error) => {
        notifications.show(
          {
            title: "Error",
            message: "Ha ocurrido un error, intenta de nuevo",
            color: "red",
            icon: <AiOutlineCheck />,
            autoClose: 1000,
            styles: (theme) => ({
              root: {
                backgroundColor: "#070616",
                "&::before": { backgroundColor: theme.white },
              },
              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                "&:hover": { backgroundColor: "#171435" },
              },
            }),
          },
          error
        );
      });
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen justify-center items-center ${
        state.isModalOpen ? "flex" : "hidden"
      }`}
    >
      <div
        onClick={ModalOpen}
        className="bg-black/50 backdrop-blur-xl absolute w-full h-screen"
      ></div>
      <div className="z-[50] bg-darkest p-8 rounded-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lightest text-4xl font-medium">CSS</h2>
          <span
            onClick={ModalOpen}
            className="text-lightest text-4xl cursor-pointer"
          >
            <FaTimes />
          </span>
        </div>
        <div className="p-8 bg-lightest rounded-2xl my-8 shadow-2xl">
          <pre>
            <code>
              <p className="text-xl font-semibold">
                <span className="text-red-500">background:</span>{" "}
                <span className="text-blue-700">{state.ColorOne};</span>
              </p>
              <p className="text-xl font-semibold">
                <span className="text-red-500">background:</span>{" "}
                <span className="text-blue-700">
                  {gradientStyle.background};
                </span>
              </p>
            </code>
          </pre>
        </div>
        <button
          onClick={copyToClipboard}
          className="py-3 px-12 bg-mid text-lightest text-2xl font-semibold rounded-full  hover:bg-lightest hover:text-darkest transition duration-500"
        >
          Copy Code
        </button>
      </div>
    </div>
  );
};

export default Modal;
