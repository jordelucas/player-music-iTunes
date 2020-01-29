import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import BtnPrevious from '../../components/BtnPrevious'
import BtnPlay from '../../components/BtnPlay'

import './styles.css'

export default function ListMusics({history}) {
    const [musics, setMusics] = useState([])
    const [album, setAlbum] = useState('[]')
    const album_id = localStorage.getItem('album')
    
    async function loadMusics() {
        const response = await api.get(`lookup?id=${album_id}&entity=song`);
        const [name, ...array] = response.data.results;
        console.log(response.data.results)
        
        setAlbum(name);
        setMusics(array);
    }

    useEffect(() => {
        loadMusics()
    }, [])
    
    return (
        <>
            <header>
                <BtnPrevious 
                    link='/listalbums'
                    history={history}
                />

                <div className="title album">
                    <h1>{album.collectionName}</h1>
                    <strong>{album.artistName} | {album.primaryGenreName}</strong>
                </div>
            </header>

            <main>
                <a className="openOn" href={album.collectionViewUrl}>
                    <BtnPlay />
                    <span>open on itunes</span>
                </a>

                <ul>
                {musics.map(music => (
                    <a href={music.previewUrl}>
                        <li key={music.trackId} className="music-item">
                                <img src={music.artworkUrl30} alt={music.trackName} />
                                
                                <div className="album-info">
                                    <strong>{music.trackName}</strong>
                                    <span>{music.primaryGenreName} | ${music.trackPrice}</span>
                                </div>
                                
                                <BtnPlay preview={music.previewUrl} />
                        </li>
                    </a>
                ))}
                </ul>
            </main>


        </>
    )
}