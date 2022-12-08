import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  console.log("complexCompute");
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    //если number не изменилось то нет необходимости его снова вызывать
    // закэшируем его с помощью useMemo
    return complexCompute(number);
  }, [number]);

  const styles = useMemo(() => {
    return {
      color: colored ? "darkred" : "black",
    };
  }, [colored]);

  useEffect(() => {
    console.log("styles changed");
  }, [styles]);

  return (
    <>
      <h1 style={styles}>Вычисляймое св-во: {computed} </h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Убрать
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>
    </>
  );
}

export default App;
