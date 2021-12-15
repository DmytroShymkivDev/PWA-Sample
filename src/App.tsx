import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState();
  const [id, setId] = useState<number>(1);

  const fetchTodos = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        console.log(json);
      });
  };

  useEffect(() => {
    fetchTodos(id);
  }, [id]);

  return (
    <div>
      <button onClick={() => setId((prev) => prev + 1)}>NEXT</button>
      {todos ? <pre>{JSON.stringify(todos, null, 2)}</pre> : <h1>EMPTY</h1>}
    </div>
  );
}

export default App;
