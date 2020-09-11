import React, { useState, useEffect } from "react";

//Components
import Todo from "components/Todo";

export default () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    async function fetchData() {
      // API fetch to DB
      const data = await fetch("http://localhost:8080/api/todos");
      const todosJSON = await data.json();
      const todos = todosJSON.map((todo, key) => {
        return (
          <Todo
            complete={todo.complete}
            id={todo.id}
            important={todo.important}
            todo={todo.todo}
            key={key}
          />
        );
      });
      setTodo(todos);
    }
    fetchData();
  }, []);
  return (
    <div>
      <p>{todo}</p>
    </div>
  );
};
