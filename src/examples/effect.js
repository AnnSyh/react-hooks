import React, { useState, useEffect } from "react";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  console.log("component render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    //очищаем слушателя при окончании действия данного эффекта
    return () => {
      console.log("clean type");
    };
  }, [type]); // вызываем только при изменении type

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("Component did mount");

    window.addEventListener("mousemove", mouseMoveHandler);

    //очищаем слушателя при окончании действия данного эффекта
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <h1>Ресурс: {type}</h1>

      <button
        onClick={() => setType("users")}
        className="btn btn-outline-primary m-4"
      >
        Пользователи
      </button>
      <button
        onClick={() => setType("todos")}
        className="btn btn-outline-primary m-4"
      >
        Todo
      </button>
      <button
        onClick={() => setType("posts")}
        className="btn btn-outline-primary m-4"
      >
        Посты
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </>
  );
}

export default App;
