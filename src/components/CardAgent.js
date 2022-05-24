import React from 'react'
import { AgentsBackground } from '../styles/styledComponets';
const CardAgent = ({img, nombre, tipo, number, estado}) => {
  return (
    <div className='cardAgent'>
      <AgentsBackground img={img}>
          <span className='cardAgent__spanListing'>{estado}</span>
      </AgentsBackground>

      <div className='cardAgents__bottom'>
      <h3 className='cardRoom__subtitle'>{nombre}</h3>
      <h4 className='cardRoom__title'>{tipo}</h4>
      <div className='cardRoom__box'>
      <h5 className='cardRoom__iconBox'></h5>
      <h5 className='cardRoom__iconBox'>{number}</h5>
      </div>
      </div>
    </div>  )
}

export default CardAgent