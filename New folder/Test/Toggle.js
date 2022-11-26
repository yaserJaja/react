// import React from "react";

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {isToggleOn: true}
//     // this.clickHandele = this.clickHandele.bind(this)
//   }

//   // clickHandele() {
//   //   this.setState( previousState => ({
//   //     isToggleOn: !previousState.isToggleOn
//   //   }))
//   // }
  
//   clickHandele = () => {
//     this.setState( previousState => ({
//       isToggleOn: !previousState.isToggleOn
//     }))
//   }
  
//   render() {
//     return (
//       <div>
//         {/* <button onClick = {() => this.clickHandele()}> */}
//         <button onClick = {this.clickHandele}>
//           {this.state.isToggleOn? 'On' : 'Off'}
//         </button>
//         <h1>{this.state.isToggleOn? 'On' : 'Off'}</h1>

//         <element event={(e) => this.nameMethod(para, e)} />
//         <element event={this.nameMethod.bind(this, para)} />
//       </div>
//     );
//   }
// }

// export default Toggle