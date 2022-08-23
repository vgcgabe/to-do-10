import React from 'react'
import S from './Input.modules.css'

const Input = (props) => {
  return (
    <fieldset className='entrada'>
      <label>{props.titulo}</label>
      <input type={props.tipo} />
    </fieldset> 
  )
}

export default Input