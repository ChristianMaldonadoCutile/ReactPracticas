import React, { useState } from 'react'

function Child(props) {
    const [userName, setUserName] = useState("Christian");

    const handLogin = () => {
      props.handLogin(userName);
    }

  return (
    <div>
        <h2>Este es un componente hijo</h2>
        <p>Nombre de usuario: {userName}</p>
        <button onClick={handLogin}>Login</button>
    </div>
  )
}

export default Child