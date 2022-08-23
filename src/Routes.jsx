import React from 'react'
import {BrowserRouter, Routes as Switch, Route} from "react-router-dom"
import Header from './Components/Header/Header'
import SideMenu from './Components/SideMenu/SideMenu'

const Routes = () => {
  return (
    <BrowserRouter>

        <Header />
        <SideMenu />
        {/* adicionar, switch e route de cada page, footer */}
        <Switch>

        </Switch>
    </BrowserRouter>
  )
}

export default Routes
