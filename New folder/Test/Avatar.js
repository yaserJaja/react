import React, {Component} from 'react'

function Avatar(props) {
  return(
    <img
      src={props.avatarUrl}
      alt={props.name}
    />
  );
}

export default Avatar