import React from 'react'

const Input = (props) => {
  return (
    <fieldset>
        <label>{props.titulo}</label>
        <input type={props.tipo} />
    </fieldset>
  )
}

export default Input