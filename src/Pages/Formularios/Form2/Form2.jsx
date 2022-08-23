import React from 'react'
import Input from '../../../Components/Input/Input.jsx'
import S from './Form2.modules.css'

const Form2 = () => {
  return (
    <form className='form2'>
        <Input titulo='CEP' tipo='number'/>
        <Input titulo='Endereço' tipo='text'/>
        <Input titulo='Endereço 2' tipo='text'/>
    </form>
  )
}

export default Form2