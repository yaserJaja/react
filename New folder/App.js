import React, {Component} from 'react'
import './App.css'
import Clock from './Clock';
import PostPage from './Project/PostPage';
import Test from './Test';
import Welcome from './Welcome'
// class App extends Component {
//   constructor() {
//     super()
//   }

//   render() {
//    return(
//     <div>
//       Hi App
//     </div>
//    ); 
//   }
// }
// {/* JavaScript */}

function App() {
  const formatName = user => user.firstName + ' ' + user.lastName;

  const user = {
    firstName: 'Yaser',
    lastName: 'Jaja'
  }

  const element = (
    <div tabIndex='0'>
      <img src={user.firstName} /> 
      {formatName(user)} 
    </div>
  )

  const newElement = React.createElement(
    'p',
    {style: {color:'red'}},
    'Hi I am Paragraph'
  )
  return(
    <div>
      <PostPage />
      {/* // newElement */}
      {/* <Clock /> */}
      {/* <Test /> */}
      {/* <Welcome name="Yaser" />   
      <Welcome name="Ammar" /> 
      <Welcome name="Reem" />  */}
    </div>
  );
}

export default  App