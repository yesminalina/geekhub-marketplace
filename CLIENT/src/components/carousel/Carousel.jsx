import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import './Carousel.css'

const Carousel = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div>
      <div className='container-home'>
        {products.slice(0, 5).map((product) => (
          <div key={product.id} style={{ backgroundImage: `url(${product.image_url})` }} className=''>
            <div className='content'>
              <h2>{product.title}</h2>
              <span>${product.price.toLocaleString('es-CL')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
