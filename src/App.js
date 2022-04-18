import React from "react";
import "./styles.css";
import store from "./redux/store";
import { decrement, increment } from "./redux/contador/contador-actions";

function App() {
  return (
    <div className="App">
      <div className="contador-container">
        <div className="contador-title">{store.getState().contador}</div>
        <div className="container-buttons">
          <button
            className="contador-btn"
            onClick={() => store.dispatch(increment())}
          >
            +
          </button>
          <button
            className="contador-btn"
            onClick={() => store.dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
