import React from 'react'
import { RoomTop } from '../styles/styledComponets';

const CardRoom = ({nombre, img, tipo, ubicacion, estado, baños,habitaciones,precio,tamaño}) => {

  return (
    <div className='cardRoom'>
    <RoomTop imagen={img}>
      <span className='cardRoom__span'>{estado}</span>
      <span className='cardRoom__price'>{precio}</span>
    </RoomTop>
    <div className='cardRoom__bottom'>
    <p className='cardRoom__title'>{tipo}</p>
    <h3 className='cardRoom__subtitle'>{nombre}</h3>
    <h4 className='cardRoom__iconBox'><img src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/>{ubicacion}</h4>

    <div className='cardRoom__box'>
    <h4 className='cardRoom__iconBox'><img className='cardRoom__icon' src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/> {habitaciones}</h4>
    <h4 className='cardRoom__iconBox'><img className='cardRoom__icon' src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/>{baños}</h4>
    <h4 className='cardRoom__iconBox'><img className='cardRoom__icon' src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/>{tamaño}</h4>
    </div>
    </div>
  </div>
  )
}

export default CardRoom;