import "./App.css";
import CollectProps from "./components/CollectProps";
import React, { useState } from "react";

function App() {
  const data = [2, 4, 6, 8];
  const [person, setPerson] = useState({
    name: "John",
    age: "20",
  });

  const personSetter = (person) => {
    setPerson(person);
  };

  return (
    <div className="App">
      <h1>React State Management</h1>
      <CollectProps data={data} personSetter={personSetter} />
      <h2>Name: {person.name}</h2>
      <h2>Age: {person.age}</h2>
    </div>
  );
}

export default App;
