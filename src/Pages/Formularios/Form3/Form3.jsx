import React from 'react'
import Input from '../../../Components/Input/Input'
import S from './Form3.modules.css'

const Form3 = () => {
  return (
    <form className='form1'>
        <Input titulo='Data de nascimento' tipo='date'/>
        <Input titulo='CPF' tipo='number'/>
        <Input titulo='Renda mensal' tipo='number'/>
    </form>
  )
}

export default Form3