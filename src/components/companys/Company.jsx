import React from 'react'

const Company = ({className,onClick,children}) => {
  return (
    <div className={className} onClick={onClick} >{children}</div>
  )
}

export default Company