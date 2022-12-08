import React, { useState } from "react";

function computeInitialCounter() {
  console.log("same colculations ...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(computeInitialCounter()); // в консоли видно что вызывается дважды при каждом увеличении счетчика что оч плохо
  const [counter, setCounter] = useState(() => computeInitialCounter()); // чтобы избежать 2-ого вызова делаем колбак ф-ю
  // (двойной вызов только при нач рендеренге при увелич счетчика нет вызовов)

  const [state, setState] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  const increment = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter((prevCounter) => {
    //   return prevCounter + 1;
    // });

    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: "новый заголовок",
      };
    });
  };

  return (
    <>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success m-4">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>

      <hr />

      {/* <button
        onClick={() => setState({ title: "новый заголовок" })} // при изменении обьекта он замещается полностью
        className="btn btn-danger"
      >
        Изменить название
      </button> */}

      <button
        onClick={updateTitle} // при изменении обьекта он замещается полностью
        className="btn btn-outline-primary m-4"
      >
        Изменить название
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}

export default App;
