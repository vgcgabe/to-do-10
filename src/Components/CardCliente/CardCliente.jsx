import React from 'react'
import S from './CardCliente.module.css'

const CardCliente = ({dados}) => {
 const {nome, sobrenome, email, telefone, cep, endereco, endereco2, dataNasc, cpf, rendaMensal} = dados
 
  return (
    <ul className={S.lista} >
        <li className={S.name}>{nome}</li>
        <li>{sobrenome}</li>
        <li>{email}</li>
        <li>{telefone}</li>
        <li>{cep}</li>
        <li>{endereco}</li>
        <li>{endereco2}</li>
        <li>{dataNasc}</li>
        <li>{cpf}</li>
        <li>{rendaMensal}</li>
    </ul>
  )
}

export default CardCliente