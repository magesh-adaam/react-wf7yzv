import React from "react";
import "./style.css";

export default function App() {
  const [input1, setInput1] = React.useState();
  const [input2, setInput2] = React.useState();
  const [output, setOutput] = React.useState();
  const printDesc = () => {
    setOutput(+input1  +input2);
  };
  
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            value={input1}
            onChange={event => setInput1(event.target.value)}
          />
        </td>
      </tr>
      <br />
      <tr>
        <td>
          <input
            type="text"
            value={input2}
            onChange={event => setInput2(event.target.value)}
          />
        </td>
      </tr>
      <br />
      <td>
        <input type="text" value={output} disabled />
      </td>
      <button onClick={printDesc}>add</button>
    </>
  );
}
