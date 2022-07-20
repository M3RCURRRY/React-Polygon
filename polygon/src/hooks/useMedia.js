import React, { useEffect, useState } from "react";

function useMedia() {
  const [mQuery, setMQuery] = useState({
    matches: window.innerHeight > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener(setMQuery);

    return () => mediaQuery.removeEventListener(setMQuery);
  }, []);
}