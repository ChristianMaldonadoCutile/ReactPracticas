import React from 'react'
import { animals } from './data/animals.js'
function E6ListaObjetos() {

    const Animales = animals.map((animal) => {
        return (
            <div key={animal.id}>
                <h2>{animal.name}</h2>
                <img src={animal.img} width={200} alt="" />
            </div>
        )
    })
    return (
        <div>
            <h1>Lista de animales</h1>
            {Animales}
        </div>
    )
}

export default E6ListaObjetos