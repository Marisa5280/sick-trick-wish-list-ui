import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { getTricks } from "../../apiCalls";
import Tricks from "../Tricks/Tricks";
import Form from "../Form/Form";

function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    getTricks().then((data) => setTricks(data));
  }, []);

  function addTrick(newTrick) {
    setTricks([...tricks, newTrick]);
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App;
