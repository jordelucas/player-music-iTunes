import React from 'react'

// https://itunes.apple.com/lookup?id=159260351&entity=album

export default function ListAlbums({ history }) {
    const artist_id = localStorage.getItem('artist')
    
    return (
        <>
            <h1>{artist_id}</h1>
        </>
    )
}