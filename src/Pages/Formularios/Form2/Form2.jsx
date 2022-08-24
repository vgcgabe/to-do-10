import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { setDadosAtuais } from '../../../BD/bd.js'
import Button from '../../../Components/Button/Button.jsx'
import Input from '../../../Components/Input/Input.jsx'
import S from './Form2.modules.css'

const Form2 = () => {
  const [dadosForm2, setDadosForm2] = useState({
    cep: '',
    endereco: '',
    endereco2: ''
  })

  const handleChange = (target, key) => {
    const value = target.value
    setDadosForm2({...dadosForm2, [key]: value})
    setDadosAtuais(dadosForm2)
  }

  return (
    <form className='form2'>
        <Input titulo='CEP' tipo='number' handleChange={(e) => handleChange(e.target, 'cep')}/>
        <Input titulo='Endereço' tipo='text' handleChange={(e) => handleChange(e.target, 'endereco')}/>
        <Input titulo='Endereço 2' tipo='text' handleChange={(e) => handleChange(e.target, 'endereco2')}/>
        <Link to='/form3'> <Button texto='Próximo'/> </Link>
    </form>
  )
}

export default Form2