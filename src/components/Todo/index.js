import React, { useState, useEffect } from "react";

export default () => {
  const [todo, setTodo] = useState("");
  useEffect(() => {
    async function fetchData() {
      // Call fetch as usual
      const res = await fetch("http://localhost:8080/api/todos/2");
      console.log("res", res);
      // Pull out the data as usual

      // Save the posts into state
      // (look at the Network tab to see why the path is like this)
    }

    fetchData();
  }, []);
  return (
    <div>
      <p>{todo}</p>
    </div>
  );
};
