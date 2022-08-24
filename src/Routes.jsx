import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from "react-router-dom"
import Header from './Components/Header/Header'
import SideMenu from './Components/SideMenu/SideMenu'
import Clientes from './Pages/Clientes/Clientes'
import Form1 from './Pages/Formularios/Form1/Form1'
import Form2 from './Pages/Formularios/Form2/Form2'
import Form3 from './Pages/Formularios/Form3/Form3'

const Routes = () => {
  return (
    <BrowserRouter>

        <Header />          

        <div className='main'>
            <SideMenu />
            <Switch>
                <Route path='/form1' element={< Form1 />} />
                <Route path='/form2' element={< Form2 />} />
                <Route path='/form3' element={< Form3 />} />
                <Route path='/clientes' element={< Clientes />} />
            </Switch>
            
        </div>
        
    </BrowserRouter>
  )
}

export default Routes
