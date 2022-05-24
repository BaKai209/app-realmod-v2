import React from 'react'

const CardRoom = () => {
  return (
    <div className='cardRoom'>
    <div className='cardRoom__top'>
      <span className='cardRoom__span'>For Buy</span>
      <span className='cardRoom__price'>$28,000/mo</span>
    </div>
    <div className='cardRoom__bottom'>
    <p className='cardRoom__title'>Study Home</p>
    <h3 className='cardRoom__subtitle'>This is a House</h3>
    <h4 className='cardRoom__iconBox'><img src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/>Louisana, California</h4>

    <div className='cardRoom__box'>
    <h4 className='cardRoom__iconBox'><img className='cardRoom__icon' src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/> California</h4>
    <h4 className='cardRoom__iconBox'><img className='cardRoom__icon' src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/>California</h4>
    <h4 className='cardRoom__iconBox'><img className='cardRoom__icon' src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='Card Icon'/>California</h4>
    </div>
    </div>
  </div>
  )
}

export default CardRoom;