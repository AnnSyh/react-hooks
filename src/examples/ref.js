import React, { useState, useEffect, useRef } from "react";

// let renderCount = 1; // переменная кот находится вне действия реакта - не хорошее решение

function App() {
  // считаем сколько раз рендерится компонент пока без исп-я useRef
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1); // у renderCount есть текущее состояние renderCount.current
  const inputRef = useRef(null); // получаем ссылку на дом элемнт
  const prevValue = useRef(""); // получаеь знач предидущего стайта

  useEffect(() => {
    // setRenderCount((prev) => prev + 1)
    renderCount.current++;
    console.log(inputRef.current.value);
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => inputRef.current.focus();

  return (
    <>
      <h1>Кол-во рендеров = {renderCount.current}</h1>
      <h1>Прошлое состояние = {prevValue.current}</h1>
      <h1>Текущее состояние = {value}</h1>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="btn btn-success" onClick={focus}>
        Фокус
      </button>
    </>
  );
}

export default App;
