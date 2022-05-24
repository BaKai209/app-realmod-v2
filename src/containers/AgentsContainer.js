import React from 'react'
import CardAgent from '../components/CardAgent'

const AgentsContainer = () => {
  return (
      <div className='cardAgents'>
          <div className='cardAgents__container'>
                <CardAgent />
                <CardAgent />
                <CardAgent />
                <CardAgent />

          </div>
      </div>

  )
}

export default AgentsContainer