import React from 'react'

const ListItem = ({refName, className, title, children,}) => {
    return (
        <li ref={refName} className={className}>{title}{children}</li>
    )
}

export default ListItem