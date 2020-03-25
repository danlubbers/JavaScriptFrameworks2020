import React from "react";
import LoginHandler from "../LoginHandler/LoginHandler";
import LoggedInContent from "../LoggedInContent/LoggedInContent";

function App() {
  return (
    <LoginHandler>
      <LoggedInContent />
    </LoginHandler>
  );
}

export default App;
