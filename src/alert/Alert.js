import React from "react";
import { useAlert } from "./AlertContext";

export default function Alert() {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <div className="alert alert-danger" onClick={alert.toggle}>
      222Это важное сообщение!!!
    </div>
  );
}
