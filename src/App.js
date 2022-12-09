import React from "react";
import Alert from "./alert/Alert";
import Main from "./Main";
import { AlertProvider } from "./alert/AlertContext";

function App() {
  return (
    <AlertProvider value={alert}>
      <div className={"container"}>
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default App;
