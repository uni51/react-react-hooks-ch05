import React, { useRef } from "react";
import "./App.css";

const SampleComponent = () => {
  const inputRefObject = useRef(null);

  const handleClick = () => {
    inputRefObject.current.focus();
  };

  return (
    <div className="App">
      {/* ref属性で inputRefObject と input要素とを関連付けする */}
      <input ref={inputRefObject} type="text" />
      <button onClick={handleClick}>入力エリアをフォーカス</button>
    </div>
  );
};

export default function App() {
  return <SampleComponent />;
}
