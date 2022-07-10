import React, { Suspense, useState } from "react";
import "./styles.css";

const Lazy = React.lazy(() => import("./Lazy"));

function Load() {
  return <div className="load" />;
}

export function App() {
  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={() => setState(!state)}>Show Lazy</button>
      <Suspense fallback={<Load />}>{state ? <Lazy /> : null}</Suspense>
    </div>
  );
}

export default App;