import React from 'react'

function Child2(props) {

    const handleLogin = () => {
        props.handleLogin("Christian");
    };
  return (
    <div className='child'>
        <h2>Este es un componente hijo</h2>
        <p>Nombre de usuario: {props.userName}</p>
        <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Child2
