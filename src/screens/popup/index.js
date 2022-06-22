import React from 'react'

import { Button } from 'react-bootstrap'

import './styles.scss'

const PopupScreen = () => {

    const { callbackAction, objectData } = window
    
    const { name, image } = objectData

  return (
    <div className='popup'>
        {objectData ?
        <>
            <div className='popup_title'>
                {name}
            </div>
            <div className='popup_image'>
                <img src={image} />
            </div>
            <div className='popup_buttons'>
                <Button variant='success' onClick={callbackAction} >OK</Button>
                <Button variant='danger' onClick={()=>window.close()} >CERRAR</Button>
            </div>
        </>
        :
        <h1>Algo salio mal</h1>
        }
    </div>
  )
}

export default PopupScreen