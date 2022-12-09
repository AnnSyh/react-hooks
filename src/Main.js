import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Привет в примере с контекст</h1>
      <button
        onClick={() => show("Этот текст из Main.js")}
        className="btn btn-success"
      >
        Показать алерт
      </button>
    </>
  );
}
