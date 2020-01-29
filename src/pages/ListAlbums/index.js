import React from 'react'
import BtnPrevious from '../../components/BtnPrevious'

// https://itunes.apple.com/lookup?id=159260351&entity=album

export default function ListAlbums({ history }) {
    const artist_id = localStorage.getItem('artist')
    
    return (
        <>
            <div className="header">
                <BtnPrevious 
                    link='/searchartist'
                    history={history}
                />
            </div>
        </>
    )
}