import React from "react";

// class Item extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <li>{this.props.value}</li>
//     );
//   }
// }
function Item(props) {
  return (
    <li>{this.props.value}</li>
  );
}
export default Item