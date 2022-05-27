import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const testData = {
  "ETH": 
  {
    value: 1200,
    week: -35.1,
    day: -0.83
  },
  "BTC":
  {
    value: 2555,
    week: 9.13,
    day: 1.55
  },
  "LTC":
  {
    value: 164,
    week: 155,
    day: 56.1
  },
  "SOL":
  {
    value: 543,
    week: 11.3,
    day: 15.1
  }
}

class CardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getCryptolist = this.getCryptolist.bind(this);

    this.state = {
      currencyList: {},
    }
  }

  getCryptolist() {

  }

  render() {
    return(
      <div className={styles.cardContainer}>
        {
          Object.entries(testData).map((item, index) => {
            let header = item[0];
            let content = Object.values(item[1]);
            return <Card key={index} header={header} content={content}/>
          })
        }
      </div>
    )
  }
}

export default CardContainer;