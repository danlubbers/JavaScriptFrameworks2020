import React from "react";
import "./App.css";
import { Welcome } from "./Components/Welcome";
// import something here

function App() {
  return <div className="App">
    <Welcome name='Jamal'/>
    <Welcome name='Jamal'/>
    <Welcome />
  </div>;
}


export default App;
