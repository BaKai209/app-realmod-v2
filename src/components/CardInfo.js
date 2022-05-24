import React from 'react'

const CardInfo = ({imagen, nombre}) => {
  return (
    <div className='card'>
      <img
      className='card__image' 
      src={imagen} alt={nombre}/>
      <h3>{nombre}</h3>
    </div>
  )
}

export default CardInfo