import React from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import './styles.css'

function BtnPrevious({ link, history }) {
    return (
        <button 
            className="previous" 
            onClick={() => history.push(`${link}`)}>
            <KeyboardBackspaceIcon />
        </button>
    )
}

export default BtnPrevious;