import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import SearchArtist from './pages/SearchArtist'
import ListAlbums from './pages/ListAlbums'
import ListMusics from './pages/ListMusics'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio} />
                <Route path='/searchartist' component={SearchArtist} />
                <Route path='/listalbums' component={ListAlbums} />
                <Route path='/listmusics' component={ListMusics} />
            </Switch>    
        </BrowserRouter>
    )
}