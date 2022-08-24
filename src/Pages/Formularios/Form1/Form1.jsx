import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { setDadosAtuais } from '../../../BD/bd'
import Button from '../../../Components/Button/Button'
import Input from '../../../Components/Input/Input'
import S from './Form1.modules.css'

const Form1 = () => {
  const [dadosForm1, setDadosForm1] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: ''
  })

  const handleChange = (target, key) => {
    const value = target.value
    setDadosForm1({...dadosForm1, [key]: value})
    setDadosAtuais(dadosForm1)
  }

  return (

    // function name() {
      
    // }

    <form className='form1'>
        <Input titulo='Nome' tipo='text' handleChange={(e) => handleChange(e.target, 'nome')}/>
        <Input titulo='Sobrenome' tipo='text' handleChange={(e) => handleChange(e.target, 'sobrenome')}/>
        <Input titulo='E-mail' tipo='email' handleChange={(e) => handleChange(e.target, 'email')}/>
        <Input titulo='Telefone' tipo='number' handleChange={(e) => handleChange(e.target, 'telefone')}/>
        <Link to='/form2'> <Button texto='Próximo'/> </Link>
    </form>
  )
}

export default Form1