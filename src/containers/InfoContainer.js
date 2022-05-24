import React from 'react'
import CardInfo from '../components/CardInfo'

const InfoContainer = () => {
  return (
    <div className='infoContainer'>
        <div style={{
            width: '100%',
            textAlign: 'center',
            marginBottom: '4rem'
        }}>
        <span style={{
            color: '#00C194',
            fontSize: '1.6rem',
        }}>Properties</span>
        <h2 style={{
            fontSize: '2rem',
            padding: '1rem'
        }}>Featured Listings</h2>
        </div>
        <div className='infoContainer__container'>
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />

        </div>
    </div>
  )
}

export default InfoContainer