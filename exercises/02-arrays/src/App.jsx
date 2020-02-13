import React from "react";
import "./App.css";

import { images } from './images/images';
import LessText from ''

function App() {
  return <div className="App">

    {images.map((image, i) => {
      return (
        
          <div key={i}>
            <img src={image} alt={i}/>
          </div>
      )
    })}
  </div>;
}

export default App;
