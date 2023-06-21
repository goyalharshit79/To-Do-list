import React, { useState } from "react";

function InputArea(props) {
  const [input, setInput] = useState("");

  function handleClick() {
    props.onClick(input);
    setInput("");
  }

  return (
    <div className="inp">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default InputArea;
