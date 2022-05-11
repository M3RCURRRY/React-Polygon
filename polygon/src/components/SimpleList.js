import React from "react";
import SimpleListItem from "./SimpleListItem";

const nums = [1, 2, 3, 4, 5];

class SimpleList extends React.Component {
  render() {
    return (
      <ul>
        {nums.map((item) => {
          return <SimpleListItem key={`li_${item}`} value={item} />;
        })}
      </ul>
    );
  }
}

export default SimpleList;
