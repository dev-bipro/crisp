import React from 'react'

const Heading = (props) => {
  return (
    <props.tagName className={props.className}>{props.title}{props.children}</props.tagName>
  )
}

export default Heading