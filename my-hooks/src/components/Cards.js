import styles from "./Cards.module.css";
import useToggle from "../hooks/useToggle";

function Cards(props) {
  const cardData = props.data;
  const addHandler = props.addHandler;

  return (
    <>
      {cardData.map((item) => {
        return <Card key={item.id} addHandler={addHandler} {...item} />;
      })}
    </>
  );
}

const Card = (props) => {
  const [isDescShown, setShown] = useToggle();
  const {id, header, desc, addHandler} = props;

  function onReadHandler() {
    addHandler(id);
    setShown();
  }

  return (
    <div className={styles.cardLayout}>
      <h2>{header}</h2>
      <button onClick={setShown}>Show description</button>
      {isDescShown && (
        <span>
          {desc}
          <button onClick={onReadHandler}>Done!</button>
        </span>
      )}
    </div>
  );
};

export default Cards;
