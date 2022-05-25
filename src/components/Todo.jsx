import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Todo = () => {
  // https://m6g3bt.sse.codesandbox.io/todos
  const [newtodo, setnewtodo] = useState("");
  const [todo, settodo] = useState([]);

  const saveinfo = () => {
    //   call api to save this information in backend
    fetch("https://m6g3bt.sse.codesandbox.io/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        value: newtodo,
        iscompleted: false
      })
    })
      .then((res) => res.json())
      .then((data) => {
        settodo([...todo, data]);
        setnewtodo("");
      });
  };

  useEffect(() => {
    fetch("https://m6g3bt.sse.codesandbox.io/todos/")
      .then((res) => res.json())
      .then((data) => {
        settodo(data);
      });
  }, []);

  return (
    <div>
      Todo
      <div>
        <input
          type="text"
          value={newtodo}
          onChange={(e) => setnewtodo(e.target.value)}
        />
        <button onClick={saveinfo}>+</button>
        {todo.map((el) => (
          <div>{el.value}</div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
