
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [element,setElement] = useState("");

  function openModal(){
    if(element === ""){
      setElement(<div className="model-overlay">
      <button className="model-close" onClick={closeModel}>Close Modal</button>
      <p className="model-p">This is the content of the modal</p>
    </div>);
    }
  }
  function closeModel(){
      setElement("");
  }
  return (
    <div>
      <button onClick={openModal}>Show Modal</button>
      {element}
    </div>
  )
}

export default App
