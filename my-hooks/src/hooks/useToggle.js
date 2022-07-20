import { useState } from "react";

function useToggle(initValue = false) {
  const [toggle, setToggle] = useState(initValue);

  const doToggle = () => {
    setToggle(!toggle);
  }

  return [toggle, doToggle]
}

export default useToggle;