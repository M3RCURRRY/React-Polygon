import React, { useMemo, useState } from "react";
import "./styles.css";

function Test() {
  console.log("Component render");
  return (
    <div>
      <h1>Aboba</h1>
      <h1>aBOBA</h1>
    </div>
  );
}

function Cards(props) {
  console.log("Cards rerender");
  return (
    <div>
      {props.list.map((item) => {
        return <p key={item}>Card {item}</p>;
      })}
    </div>
  );
}

function createUser(name, surname) {
  console.log("createUser called");
  return { name, surname };
}

const MemoComp = React.memo(Test);
const MemoCards = React.memo(Cards);

const outerList = [6, 7, 8, 9, 10];

export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [counter, setCounter] = useState(0);

  const user = useMemo(() => createUser(name, surname), [name, surname]);
  const memoList = useMemo(() => [1, 2, 3, 4, 5], []);

  return (
    <div>
      <MemoComp /> {/* No rerender */}
      <button onClick={() => setCounter(counter + 1)}>
        На меня нажали {counter} раз
      </button>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </form>
      <MemoCards list={memoList} /> {/* No rerender */}
      <MemoCards list={outerList} /> {/* No rerender */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
