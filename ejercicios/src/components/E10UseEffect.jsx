import React from 'react'
import { useState } from 'react'
import Child3 from './props/Child3'

function E10UseEffect() {
    const [showChil, setShowChil] = useState(true);
    const click =()=>{
        setShowChil(!showChil);
    }
  return (
    <div>
      <h1>UseEffect | Ciclo de vida de los componentes</h1>
      <button onClick={click}>Mostrar</button>
      {showChil && <Child3></Child3>}
    </div>
  )
}

export default E10UseEffect
