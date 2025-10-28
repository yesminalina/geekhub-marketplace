import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import './Carousel.css'

import Loader from '../loader/Loader.jsx'

const Carousel = () => {
  const { products } = useContext(ProductsContext)
  const productsvacio = []
  const navigate = useNavigate()
  return (
    <div>
      <div className='container-home'>
        {productsvacio.length === 0
          ? <Loader />
          : products.slice(0, 5).map(({ id, title, price, image_url: imageUrl }) => (
          <div className='imgCarousel' key={id} style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => navigate(`/product-details/${id}`)}>
            <div className='content'>
              <h2>{title}</h2>
              <span>${price.toLocaleString('es-CL')}</span>
            </div>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Carousel
