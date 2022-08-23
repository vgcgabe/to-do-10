import React from 'react'
import { Link } from 'react-router-dom'
import S from './SideMenu.modules.css'

const SideMenu = () => {
  return (
    <div className='sideMenu'>
        <nav className='navBar'>
          <Link to='' className='link'>Cadastro</Link>
          <Link to='' className='link'>Clientes</Link>
        </nav>
    </div>
  )
}

export default SideMenu;