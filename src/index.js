// import React and ReactDOM libraries as project dependencies
import React from "react";
import ReactDOM from "react-dom";

// refresh page when changes are made
if (module.hot) {
  module.hot.accept();
}

// create React (function) component
const App = function () {
  const buttonText = { text: "Click me" };
  const labelText = "Enter Name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// take react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
