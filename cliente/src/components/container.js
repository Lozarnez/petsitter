import React from 'react'

function Container(props) {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>{props.children}</div>
  )
}

export default Container;