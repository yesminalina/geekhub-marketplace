import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext'
import './Carousel.css'

const Carousel = () => {
  const { products } = useContext(ProductContext)

  return (
    <div>
      <div className='container-home'>
        {products.slice(0, 10).map((product) => (
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
