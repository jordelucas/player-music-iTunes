import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import artistProfile from '../../assets/artist.svg';

import './styles.css'

export default function SearchArtist({ history }) {
    const [artists, setArtists] = useState([])
    
    useEffect(() => {
        async function loadArtists() {
            const response = await api.get('search?term=pedro&entity=musicArtist&limit=10');
            
            setArtists(response.data.results);
        }

        loadArtists()
    }, [])

    return (
        <>
            <header>
                <button className="previous" onClick={() => history.push('/')}><KeyboardBackspaceIcon /></button>
                
                <form>
                    <input type="text"placeholder="Artist" />
                    <button><SearchIcon/></button>
                </form>
            </header>

            <main>
                <ul>
                    {artists.map(artist => (
                        <li key={artist.artistId} className="artist-item">
                            <img src={artistProfile} alt={artist.artistName} />
                            
                            <div className="artist-info">
                                <strong>{artist.artistName}</strong>
                                <span>{artist.primaryGenreName}</span>
                            </div>

                            <button className='view-artist'><ChevronRightIcon /></button>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}