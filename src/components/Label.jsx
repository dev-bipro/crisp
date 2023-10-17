import React from 'react'

const Label = ({className, forLabel, title}) => {
  return (
    <label className={className} for={forLabel}>{title}</label>
  )
}

export default Label