import React from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';

import './styles.css'

export default function SearchArtist({ history }) {
    return (
        <>
            <header>
                <button class="previous" onClick={() => history.push('/')}><KeyboardBackspaceIcon /></button>
                
                <form>
                    <input type="text"placeholder="Artist" />
                    <button><SearchIcon/></button>
                </form>
            </header>

            <main>
                <ul>
                    <li className="artist-item" onClick={() => history.push('/listalbums')}>
                        <img src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/60x60bb.jpg" alt="artist-name"/>
                        
                        <div className="artist-info">
                            <strong>Nome</strong>
                            <span>Genero</span>
                        </div>

                        <button className='view-artist'><ChevronRightIcon /></button>
                    </li>
                </ul>
            </main>
        </>
    )
}