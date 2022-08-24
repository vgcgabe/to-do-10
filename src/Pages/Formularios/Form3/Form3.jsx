import React, { useState } from 'react'
import { clientes, dadosAtuais, setDadosAtuais } from '../../../BD/bd'
import Button from '../../../Components/Button/Button'
import Input from '../../../Components/Input/Input'
import S from './Form3.modules.css'

const Form3 = () => {
  const [dadosForm3, setDadosForm3] = useState({
    dataNasc: '',
    cpf: '',
    rendaMensal: ''
  })

  const handleChange = (target, key) => {
    const value = target.value
    setDadosForm3({...dadosForm3, [key]: value})
    setDadosAtuais(dadosForm3)
  }

  return (
    <form className='form1'>
        <Input titulo='Data de nascimento' tipo='date' handleChange={(e) => handleChange(e.target, 'dataNasc')}/>
        <Input titulo='CPF' tipo='number' handleChange={(e) => handleChange(e.target, 'cpf')}/>
        <Input titulo='Renda mensal' tipo='number' handleChange={(e) => handleChange(e.target, 'rendaMensal')}/>
        <Button texto='Salvar' onClick={(e) => {
          e.preventDefault()
          clientes.push(dadosAtuais)}
          }/>
    </form>
  )
}

export default Form3