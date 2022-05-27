import React from "react";
import Button from "../controls/Button/Button";
import ModalSpace from "../layout/sides/ModalSpace/ModalSpace";
import styles from "./FilterModal.module.css";

const cryptoTest = {
  "ETH": 11,
  "BTC": 54,
  "LTC": 5,
  "SOL": 27
}

class FilterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoList: cryptoTest,
    }
  }

  render() {
    return(
      <ModalSpace>
        <h2>Modal Content</h2>
        <ul>
          {
            Object.keys(this.state.cryptoList).map((item, index) => {
              return <li key={index}><input type="checkbox" defaultChecked={true}/>{item}</li>
            })
          }
        </ul>
        <Button onClick={this.props.onSubmit}>Save changes</Button>
      </ModalSpace>
    )
  }
}

export default FilterModal;