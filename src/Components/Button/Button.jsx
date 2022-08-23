import React from 'react'
import S from './Button.modules.css'

const Button = ({onClick, texto}) => {
  return (
    <button className='butaozin' onClick={onClick}>{texto}</button>
  )
}

export default Button