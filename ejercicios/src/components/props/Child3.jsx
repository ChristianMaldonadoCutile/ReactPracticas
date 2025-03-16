import React, { useEffect } from 'react'
import {useState} from 'react'


function Child3() {

    const [contador, setContador] = useState(0);

    const contar = () => {
        setContador(contador + 1);
    }

    useEffect(() => {
        return () => {
            console.log("El componente se ha desmontado");
        }
    }, [])
  return (
    <div className='child'>
      <h2>Este es un componente hijo</h2>
      <h3>Contador: {contador}</h3>
      <button onClick={contar}>Incrementar</button>
    </div>
  )
}

export default Child3
