import React from 'react'
import logo from '../../assets/logo.svg'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './styles.css'

export default function Inicio({ history }) {
    return (
        <>
            <img id="logo" src={logo} alt="logomarca"/>
        
            <div className="apresentation-block">
                <strong>iTunes - Music </strong>

                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </p>

                <button onClick={() => history.push('/searchartist')}><ChevronRightIcon /></button> 
            </div>
        </>
    )
}