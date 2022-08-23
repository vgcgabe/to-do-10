import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from "react-router-dom"
import Header from './Components/Header/Header'
import SideMenu from './Components/SideMenu/SideMenu'
import Form1 from './Pages/Formularios/Form1/Form1'

const Routes = () => {
  return (
    <BrowserRouter>

        <Header />          

        <div className='main'>
            <SideMenu />
            <Switch>
                <Route path='/form1' element={< Form1 />} />
            </Switch>
            
        </div>
        

    </BrowserRouter>
  )
}

export default Routes
