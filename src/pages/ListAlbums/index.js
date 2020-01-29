import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import BtnPrevious from '../../components/BtnPrevious'
import BtnNext from '../../components/BtnNext'

import './styles.css'

export default function ListAlbums({ history }) {
    const artist_id = localStorage.getItem('artist')

    const [albums, setAlbums] = useState([])
    const [artist, setArtist] = useState('')

    async function loadAlbums() {
        const response = await api.get(`lookup?id=${artist_id}&entity=album&limit=15`);
        const [name, ...array] = response.data.results;

        setArtist(name);
        setAlbums(array);
    }

    useEffect(() => {
        loadAlbums()
    }, [])

    function splitYear(data) {
        let [year] = data.split('-')
        return year;
    }

    function handleNext(id) {
        localStorage.setItem('album', id)

        history.push('/listmusics');
    }


    return (
        <>
            <header>
                <BtnPrevious 
                    link='/searchartist'
                    history={history}
                />

                <div className="title">
                    <strong>{artist.artistName}</strong>
                    <h1>Albums</h1>
                </div>
            </header>
            <main>
                <ul>
                {albums.map(album => (
                    <li key={album.collectionId} className="album-item" onClick={() => handleNext(album.collectionId)}>
                        <img src={album.artworkUrl100} alt={album.collectionName} />
                        
                        <div className="album-info">
                            <strong>{album.collectionName}</strong>
                            <span>{splitYear(album.releaseDate)}</span>
                        </div>
                        
                        <BtnNext />
                    </li>
                ))}
                </ul>
            </main>
        </>
    )
}