import React, { useCallback, useState } from "react";
import ItemsList from "./ItemsList";

function App() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "darkred" : "black",
  };

  const generateItemsFromAPI = useCallback(
    (indexNumber) => {
      // берем массив из count элементов, заполняем его пустыми строкаи ' ',
      // берем .map по индексу i и наполняем эл-тами типа `Элемент ${i + 1}`
      return new Array(count)
        .fill(" ")
        .map((_, i) => `Элемент ${i + indexNumber}`);
    },
    [count]
  );

  return (
    <>
      <h1 style={styles}>Количество элементов: {count}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setCount((prev) => prev + 1)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}

export default App;
