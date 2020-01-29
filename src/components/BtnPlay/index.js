import React, { useEffect } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import './styles.css'

function BtnPlay(preview) {  
    return (
        <button className="play">  
            <PlayArrowIcon />
        </button>
    )
}

export default BtnPlay;