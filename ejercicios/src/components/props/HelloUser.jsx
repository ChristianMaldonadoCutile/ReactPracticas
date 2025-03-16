import React from 'react'

function HelloUser(props) {
  return (
    <h2 className='child'>hola {props.userName}</h2>
  )
}

export default HelloUser
