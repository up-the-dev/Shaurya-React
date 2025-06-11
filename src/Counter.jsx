import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  //   let counter = 0;

  const inc = () => {
    console.log("Incrementing counter");

    const count = counter + 1;
    setCounter(count);
    console.log("Counter value:", counter);
  };

  const dec = () => {
    console.log("Decrementing counter");
    const count = counter - 1;
    setCounter(count);
    console.log("Counter value:", counter);
  };

  return (
    <>
      <button style={{ fontSize: "25px", padding: "15px 10px" }} onClick={inc}>
        Inc
      </button>
      <div>
        <h1>{counter}</h1>
      </div>
      <button style={{ fontSize: "25px", padding: "15px 10px" }} onClick={dec}>
        Dec
      </button>

      <hr />
      <br />

      <button
        style={{ fontSize: "25px", padding: "15px 10px" }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Inc
      </button>
      <div>
        <h1>{counter}</h1>
      </div>
      <button
        style={{ fontSize: "25px", padding: "15px 10px" }}
        onClick={(e) => {
          setCounter(e, counter - 1);
        }}
      >
        Dec
      </button>
    </>
  );
};
