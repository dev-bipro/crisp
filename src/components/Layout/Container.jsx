import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-maxContainer mx-auto px-2.5 ${className}`}>
        {children}
    </div>
  )
}

export default Container