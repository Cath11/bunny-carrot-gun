import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./Counter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1> Bunny - Carrot - Gun</h1>
      <h2> Remember Bunny eats Carrot, Carrot blocks Gun, and Gun shoots Bunny</h2>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

