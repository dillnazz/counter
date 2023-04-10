import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const FunctionCounter = (props) => {
  const [count, setCount] = useState(0);

  const incrCounter = () => {
    setCount((prevState) => {
      return (prevState = prevState + 1);
    });
  };
  const minCounter = () => {
    setCount((prevState) => {
      return (prevState = prevState - 1);
    });
  };
  useEffect(() => {
    console.log("did update finction");
    return () => {
      console.log("function killed");
    };
  });
  return (
    <div className="flex-sm-column border border-dark rounded">
      <h3 className="p-3 mb-2 bg-success text-white border border-dark rounded">
        {" "}
        Functional Lifecycle
      </h3>
      <h3 className="text-success d-flex justify-content-center">{count}</h3>
      <div className="d-flex justify-content-around">
        {" "}
        <button className="btn btn-outline-success" onClick={incrCounter}>
          +
        </button>
        <button className="btn btn-outline-success" onClick={minCounter}>
          -
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            props.onKill(false);
          }}
        >
          kill
        </button>
      </div>
    </div>
  );
};

const Root = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="d-flex justify-content-center">
      {isVisible && <FunctionCounter onKill={setIsVisible} />}
      <div className="d-flex justify-content-center flex-column">
        {isVisible && <App onKill={setIsVisible} />}
      </div>
      {!isVisible && (
        <button
          className="btn btn-outline-success"
          onClick={() => setIsVisible(true)}
        >
          Take back
        </button>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
