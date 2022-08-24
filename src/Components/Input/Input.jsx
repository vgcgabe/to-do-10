import React from 'react'
import S from './Input.modules.css'

const Input = (props) => {
  return (
    <fieldset className='entrada'>
      <label>{props.titulo}</label>
      <input type={props.tipo} onChange={props.handleChange} />
    </fieldset> 
  )
}

export default Input