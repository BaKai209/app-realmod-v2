import React from 'react'

const CardAgent = () => {
  return (
    <div className='cardAgent'>
      <div className='cardAgents__top'>
          <span className='cardAgent__spanListing'>* 08 Listing</span>
      </div>

      <div className='cardAgents__bottom'>
      <h3 className='cardRoom__subtitle'>Library Area</h3>
      <h4 className='cardRoom__title'>Sweet Home</h4>
      <div className='cardRoom__box'>
      <h5 className='cardRoom__iconBox'><img src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='CardAgents'/></h5>
      <h5 className='cardRoom__iconBox'><img src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='CardAgents'/></h5>
      <h5 className='cardRoom__iconBox'><img src='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' alt='CardAgents'/></h5>
      </div>
      </div>
    </div>  )
}

export default CardAgent