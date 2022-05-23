import React from "react";
import ModalSpace from "../layout/sides/ModalSpace/ModalSpace";

class FilterModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ModalSpace>
        <h1>Modal Content</h1>
      </ModalSpace>
    )
  }
}

export default FilterModal;