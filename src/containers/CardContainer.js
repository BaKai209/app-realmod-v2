import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import CardInfo from '../components/CardInfo'
import CardRoom from '../components/CardRoom';
import { listAsync } from '../redux/actions/actionProducts';

const CardContainer = () => {

const {products} = useSelector(store => store.products)

const dispatch = useDispatch()

useEffect(() => {
 dispatch(listAsync())
}, [])

console.log(products);




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
        <div className='cardRoomContainer__container'>        
        {products.map((product, index) =>(
          <CardRoom key={index}
          nombre={product.nombre}
          img={product.imagen}
          tipo={product.tipo}
          estado={product.estado}
          ubicacion={product.ubicacion}
          baños={product.baños}
          habitaciones={product.habitaciones}
          precio={product.precio}
          tamaño={product.tamaño}
          />
        ))}

        </div>
    </div>
  )
}

export default CardContainer;