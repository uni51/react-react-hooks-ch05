import React, { useRef, useState, useEffect } from "react";
import "./App.css";

const SampleComponent = () => {
  const inputRefObject = useRef(null);

  const [text, setText] = useState("");

  useEffect(() => {
    // 第２引数なしの useEffect を利用すると、レンダリングのたびに副作用関数が実行される
    console.log("レンダリング！");
  });

  const handleClick = () => {
    setText(inputRefObject.current.value);
  };

  const textReset = () => {
    setText("");
    inputRefObject.current.value = "";
  };

  return (
    <>
      <input ref={inputRefObject} type="text" />
      <button onClick={handleClick}>set text</button>
      <button onClick={textReset}>reset</button>
      <p>text: {text}</p>
    </>
  );
};

export default function App() {
  return <SampleComponent />;
}
