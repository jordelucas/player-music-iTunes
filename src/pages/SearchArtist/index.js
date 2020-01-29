import React, { useState, useEffect } from 'react'
import api from '../../services/api'

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import artistProfile from '../../assets/artist.svg';

import './styles.css'

export default function SearchArtist({ history }) {
    const [artists, setArtists] = useState([])
    const [artistSearch, setArtistSearch] = useState('');

    async function loadArtists(name) {
        const response = await api.get(`search?term=${name}&entity=musicArtist&limit=10`);
        setArtists(response.data.results);
    }

    useEffect(() => {
        loadArtists('taylor')
    }, [])

    useEffect(() => {
        if(artistSearch !== '') {
            loadArtists(artistSearch.replace(' ', '+'))
        }
    }, [artistSearch])

    return (
        <>
            <header>
                <button className="previous" onClick={() => history.push('/')}><KeyboardBackspaceIcon /></button>
                
                <div className="search">
                    <input 
                        type="text"
                        id="artist_name"
                        name="artist_name"
                        placeholder="Artist"
                        value={artistSearch}
                        onChange={e => setArtistSearch(e.target.value)}
                        required
                    />
                    <label htmlFor="artist_name"><SearchIcon/></label>
                </div>
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