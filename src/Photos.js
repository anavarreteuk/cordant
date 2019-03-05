import React from 'react'

const Photos = (props) => {
  return (
    <li>
      {props.photo.title}---{props.photo.url}
    </li>
  )
}

export default Photos
