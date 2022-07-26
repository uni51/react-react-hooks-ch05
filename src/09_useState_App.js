import React, { useState, useEffect } from "react";
import "./App.css";

const SampleComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const [text, setText] = useState("");

  useEffect(() => {
    // 第２引数なしの useEffect を利用すると、レンダリングのたびに副作用関数が実行される
    console.log("レンダリング！");
  });

  const handleClick = () => {
    setText(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const textReset = () => {
    setText("");
    setInputValue("");
  };

  return (
    <>
      <input value={inputValue} onChange={handleChange} type="text" />
      <button onClick={handleClick}>set text</button>
      <button onClick={textReset}>reset</button>
      <p>text: {text}</p>
    </>
  );
};

export default function App() {
  return <SampleComponent />;
}
