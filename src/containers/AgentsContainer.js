import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardAgent from '../components/CardAgent'

const AgentsContainer = () => {

const [agents, setAgents] = useState([])

const url = 'https://real-mod.herokuapp.com/agents/'

useEffect(() => {
  const getData = async () =>{
    axios.get(url)
    .then(resp=>{
      const data =resp.data
      setAgents(data)
    })
  }
  getData()
}, [])

console.log(agents);

  return (
    <div className='cardAgents'>
      <div className='cardAgents__container'>
        
        {agents.map((agent, index) =>(
          <CardAgent key={index}
          nombre={agent.nombre}
          img={agent.img}
          tipo={agent.tipo}
          estado={agent.estado}
          number={agent.number}
          />
        ))}

      </div>
    </div>

  )
}

export default AgentsContainer