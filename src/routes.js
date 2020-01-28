import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio} />
            </Switch>    
        </BrowserRouter>
    )
}