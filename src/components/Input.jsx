import React from 'react'

const Input = ({className, id, onChange, type, placeHolder, children}) => {
  return (
    <>
      <input className={className} onChange={onChange} type={type} placeholder={placeHolder} id={id} />
      {
        children
      }
    </>
  )
}

export default Input