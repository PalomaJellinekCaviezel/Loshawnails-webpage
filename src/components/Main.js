import React, { useState } from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [counter, setCounter] = useState(10);

  const executeAlert = () => {
    if (counter >= 100) {
      alert("Llegaste al final");
      return;
    }
    setCounter(counter + 10);
  };

  return (
    <section className="main-section">
      <div className="container">
        <h1>{counter}</h1>
        <button onClick={executeAlert}>Increase</button>
        <br />
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </section>
  );
};

export default Main;
