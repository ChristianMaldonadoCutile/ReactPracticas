import React, { useState } from 'react'

function E3UseState() {
    const [contador, setContador] = useState(0);
    const contar = () => {
        setContador(contador + 1);
        console.log(contador + 1);
    }
    return (
        <div>
            <h2 onClick={contar}>Cantidad de click: {contador}</h2>
        </div>
    )
}

export default E3UseState