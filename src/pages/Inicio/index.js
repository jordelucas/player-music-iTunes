import React from 'react'
import logo from '../../assets/logo.svg'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Inicio({ history }) {
    return (
        <>
            <img src={logo} alt="logomarca"/>
        
            <div className="content">
                <h1>iTunes - Music </h1>

                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </p>

                <button onClick={() => history.push('/searchartist')}><ChevronRightIcon /></button> 
            </div>
        </>
    )
}