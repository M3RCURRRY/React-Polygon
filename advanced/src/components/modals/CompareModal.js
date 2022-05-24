import React from "react";
import ModalSpace from "../layout/sides/ModalSpace/ModalSpace";
import styles from "./CompareModal.module.css";

class CompareModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ModalSpace>
        <h2>Compare two courses</h2>
      </ModalSpace>
    )
  }
}

export default CompareModal;