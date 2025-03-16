import React, { useState } from 'react'
import HelloUser from './props/HelloUser';
import Child2 from './props/Child2';

function E9StateLift() {
    const [displayName, setDisplayName] = useState("");

    const login = (name) => {
        setDisplayName(name);
    }
  return (
    <div>
      <h1>State Up | Comunicacion entre hermanos</h1>
      <h2>hola {displayName}</h2>
      <HelloUser userName = {displayName}></HelloUser>
      <Child2 handleLogin={login} userName = {displayName}></Child2>
    </div>
  )
}

export default E9StateLift
