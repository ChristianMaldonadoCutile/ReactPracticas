import React from 'react'

function Child(props) {
    const {msg, person} = props;

  return (
    <div>
        <h2>Este es el componente hijo</h2>
        <p>{msg}</p>
        <div>
            {person.sex} - {person.age}
        </div>
    </div>
  )
}

export default Child