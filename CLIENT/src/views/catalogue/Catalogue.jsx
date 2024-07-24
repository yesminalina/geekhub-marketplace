import './Catalogue.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductsContext'
import IconHeart from '../../components/iconHeart/IconHeart'
import { Badge, Dropdown } from 'react-bootstrap'

const Catalogue = () => {
  const { products, toggleLike } = useContext(ProductContext)

  const navigate = useNavigate()

  return (
    <>
      <div className='grid-container'>
        <aside>
          <h3>Categorías</h3>
          <article className='category'>
            <a href='#'><p>Juegos de Mesa</p></a>
            <p className='cantidad'>()</p>
          </article>
          <article className='category'>
            <a href='#'><p>TCG</p></a>
            <p className='cantidad'>(150)</p>
          </article>
          <article className='category'>
            <a href='#'><p>Figuras coleccionables</p></a>
            <p className='cantidad'>(8)</p>
          </article>
          <article className='category'>
            <a href='#'><p>Mangas y Cómics</p></a>
            <p className='cantidad'>(3)</p>
          </article>
          <article className='category'>
            <a href='#'><p>Álbumes y Láminas</p></a>
            <p className='cantidad'>(3)</p>
          </article>
        </aside>

        <Dropdown className='d-flex'>
          <Dropdown.Toggle id='dropdown-autoclose-true'>
            Filtro
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#'>Precio de menor a mayor</Dropdown.Item>
            <Dropdown.Item href='#'>Precio de mayor a menor</Dropdown.Item>
            <Dropdown.Item href='#'>Alfabético de A-Z</Dropdown.Item>
            <Dropdown.Item href='#'>Alfabético de Z-A</Dropdown.Item>
            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className='gallery grid-columns-5 p-3'>
          {products.map((product) => (
            <div onClick={() => navigate(`/product-details/${product.id}`)} className='producto' key={product.id} style={{ backgroundImage: `url(${product.image_url})` }}>
              <div onClick={() => { toggleLike(product.id) }} className='cursor-pointer'>{product.liked ? <IconHeart filled /> : <IconHeart />}</div>
              <div>
                <p>{product.title}</p>
                <h6><Badge bg='dark'>Precio: {product.price}</Badge></h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Catalogue
