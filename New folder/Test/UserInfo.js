import React, {Component} from 'react'
import Avatar from './Avatar';

function UserInfo(props) {
  return(
    <div className='UserInfo'>
      <Avatar user = {props.author} />
      <div className='UserInfo-name'>
        {props.name}
      </div>
  </div>
  );
}

export default UserInfo