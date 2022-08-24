import React from 'react'
import { clientes } from '../../BD/bd'
import CardCliente from '../../Components/CardCliente/CardCliente'
import S from './Clientes.module.css'

const Clientes = () => {
  return (
    <div className={S.container} style={{ width: '100%', overflowY: 'auto'}}>
        {clientes.map((el,i ) => <CardCliente key={i} dados={el}/> )}
    </div>
  )
}

export default Clientes