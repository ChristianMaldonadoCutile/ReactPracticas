import React from 'react'
import Child from './props/Child'
import { useState } from 'react'

function E7Props() {
  {/*const text = "Variables desde el padre";
    const person = {
        sex: "hombre",
        age: 20,
    };
  return (
    <div>
        <h1>Props | Comunicacion entre componentes Padre-Hijo ⬇</h1>
        <Child msg = {text} person = {person}></Child>
    </div>
  )*/}

  const [displayName, setDisplayName] = useState("");
  const login = (name) => {
    setDisplayName(name);
  }
  return (
    <div>
      <h1>Props 1 Comuncacion hijo-padre</h1>
      <h2>hola {displayName}</h2>
      <Child handLogin={login}></Child>
    </div>
  )

}

export default E7Props