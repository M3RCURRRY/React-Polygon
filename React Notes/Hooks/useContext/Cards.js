import { useContext } from "react";
import ThemeContext from "./context";
import styles from "./Cards.module.css";

function Cards() {
  const { device, setDevice } = useContext(ThemeContext);

  console.log(device);
  console.log(setDevice);
  return (
    <>
      <div
        className={
          device === "desktop" ? styles.desktopCards : styles.mobileCards
        }
      >
        <div>First item</div>
        <div>Second item</div>
        <div>Third item</div>
      </div>
      <button
        onClick={() => setDevice(device === "desktop" ? "mobile" : "desktop")}
      >
        Change device layout
      </button>
    </>
  );
}

export default Cards;
