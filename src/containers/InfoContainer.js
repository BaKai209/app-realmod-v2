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
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243486/Realmod/icons/info_icons/parking-area_1_ozykdn.png' 
                nombre='parking Area'
                />
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_1_orh4qa.png' 
                nombre='swimming pool'
                />
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243574/Realmod/icons/info_icons/parking-area_1_2_wuwxvr.png' 
                nombre='private security'
                />
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_3_klwfex.png' 
                nombre='medical Center'
                />
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_8_cmqsh9.png' 
                nombre='kids playland'
                />
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_4_vpffyo.png' 
                nombre='Library Area'
                />
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_5_p1z5hz.png' 
                nombre='King size bed'
                />
                <CardInfo imagen='https://res.cloudinary.com/dke83t4p2/image/upload/v1653243573/Realmod/icons/info_icons/parking-area_1_7_f0ugpg.png' 
                nombre='Smart Homes'
                />

            </div>
        </div>
    )
}

export default InfoContainer