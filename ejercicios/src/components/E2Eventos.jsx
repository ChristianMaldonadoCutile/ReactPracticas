import React from 'react'

function E2Eventos() {
    const click = () => {
        console.log("Me diste click");
    }
  return (
    <div>
        <h1 onClick={click}>Dale CLick</h1>
    </div>
  )
}

export default E2Eventos