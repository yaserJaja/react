import React from "react";
import Item from "./Item";

// class List extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const numbers = props.numbers;
//     const listItem = numbers.map(number => 
//       <Item key={number.toString()} value = {number} />  
//     );
//     return (
//       <ul>{listItem}</ul>
//     );
//   }
// }
function List(props) {
  const numbers = props.numbers;
  const listItem = numbers.map(number => 
    <Item key={number.toString()} value={number} />  
  );
  return (
    <ul>{listItem}</ul>
  );
}

export default List