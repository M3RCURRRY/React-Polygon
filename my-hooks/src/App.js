import "./App.css";
import useToggle from "./hooks/useToggle";
import cards from "./data/cards";
import Cards from "./components/Cards";
import useLocalStorage from "./hooks/useLocalStorage";
import { useMedia } from "./hooks/useMedia";

function App() {
  const [isToggled, setToggle] = useToggle();
  const [checked, setChecked] = useLocalStorage([], "react");
  const {isMobile, isTablet, isDesktop} = useMedia();

  const addToChecked = (id) => {
    const newChapter = cards.find(item => item.id === id);
    console.log(newChapter);
    console.log([...checked, newChapter])
    setChecked([...checked, newChapter]);
  }

  return (
    <div className="App">
      <div className="cardsContainer">
        <Cards data={cards} addHandler={addToChecked}/>
      </div>
      <button onClick={setToggle}>Show div </button>
      {isToggled && <div className="square2hide"></div>}
    </div>
  );
}

export default App;
