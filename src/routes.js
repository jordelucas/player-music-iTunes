import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import SearchArtist from './pages/SearchArtist'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/searchartist' component={SearchArtist} />
            </Switch>    
        </BrowserRouter>
    )
}