import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button
        onClick={() => {
          setChangedText(true);
        }}
      >
        Change Text!
      </button>
    </div>
  );
}
