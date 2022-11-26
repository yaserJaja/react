import React, {Component} from 'react'
import UserInfo from './UserInfo';

function Comment(props) {
  return(
    <div className='comment'>
      <UserInfo user = {props.name} />
      <div className='Comment-text'>
        {props.text}
      </div>
      <div className='Comment-data'>
        {/* {formatData(props.data)} */}
      </div>
    </div>
  );
}

export default Comment



// import React, {Component} from 'react'

// function Comment(props) {
//   return(
//     <div className='comment'>
//       <div className='userInfo'>
//         <img
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className='UserInfo-name'>
//           {props.author.name}
//         </div>
//       </div>
//       <div className='Comment-text'>
//         {props.text}
//       </div>
//       <div className='Comment-data'>
//         {formatData(props.data)}
//       </div>
//     </div>
//   );
// }

// export default Comment