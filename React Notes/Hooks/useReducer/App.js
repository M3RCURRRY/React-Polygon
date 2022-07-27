import React, { useReducer, useState } from "react";
import "./styles.css";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const MULTIPLY = "multiply";
const DIVIDE = "divide";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        counter: state.counter - 1
      };
    case MULTIPLY:
      return {
        counter: state.counter * 2
      };
    case DIVIDE:
      return {
        counter: state.counter / 2
      };
    default:
      return {
        counter: state.counter
      };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1
  });

  function incHandler() {
    dispatch({
      type: INCREMENT
    });
  }

  function decHandler() {
    dispatch({
      type: DECREMENT
    });
  }

  function multHandler() {
    dispatch({
      type: MULTIPLY
    });
  }

  function divHandler() {
    dispatch({
      type: DIVIDE
    });
  }

  return (
    <div>
      <p>{state.counter}</p>
      <button onClick={incHandler}>Прибавить единицу</button>
      <button onClick={decHandler}>Вычесть единицу</button>
      <button onClick={multHandler}>Удвоить</button>
      <button onClick={divHandler}>Половина</button>
    </div>
  );
}
