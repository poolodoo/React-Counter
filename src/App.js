import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [counter, updateCounter] = useState(0);
  
  function handleIncrement() {
    updateCounter( counter + 1 );
  }

  function handleDecrement() {
    updateCounter( counter <= 0 ? 0: counter - 1 );
  }    
  return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>

      </header>
    </div>
  );
}

export default App;
