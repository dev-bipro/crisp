import React from 'react'

const Paragraph = ({className, onClick, title, children}) => {
  return (
    <p className={className} onClick={onClick}>{title}{children}</p>
  )
}

export default Paragraph