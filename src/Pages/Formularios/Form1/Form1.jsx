import React from 'react'
import Button from '../../../Components/Button/Button'
import Input from '../../../Components/Input/Input'
import S from './Form1.modules.css'

const Form1 = () => {
  return (

    // function name() {
      
    // }

    <form className='form1'>
        <Input titulo='Nome' tipo='text'/>
        <Input titulo='Sobrenome' tipo='text'/>
        <Input titulo='E-mail' tipo='email'/>
        <Input titulo='Telefone' tipo='number'/>
        <Button texto='Próximo'/>
    </form>
  )
}

export default Form1