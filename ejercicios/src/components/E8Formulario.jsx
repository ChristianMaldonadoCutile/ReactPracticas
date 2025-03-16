import React from 'react'

function E8Formulario() {
  return (
    <div className="dark">
        <h1>className - htmlFor - selec defaultValue</h1>
        <form >
            <label htmlFor='username'>UserName</label> 
            <input type="text" id='username' placeholder='Username'/>
            <br />
            <select defaultValue={"javascript"}>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
            </select>
        </form>
    </div>
  )
}

export default E8Formulario