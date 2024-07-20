import './Catalogue.css'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext'
import IconHeart from './IconHeart'
import { Badge, Dropdown } from 'react-bootstrap'

const Catalogue = () => {
  const { products, toggleLike } = useContext(ProductContext)
  return (
    <>
      <div className='grid-container'>
        <aside>
          <h3>Categorías</h3>
          {products.map((product) => (
            <article className='comic' key={product.id}>
              <a href='#'><p>{product.category}</p></a>
              <p className='cantidad'>({product.stock})</p>
            </article>
          ))}
          <h3>Categorías</h3>
          <article className='comic'>
            <a href='#'><p>Comics</p></a>
            <p className='cantidad'>(50)</p>
          </article>
          <article className='manga'>
            <a href='#'><p>Manga</p></a>
            <p className='cantidad'>(150)</p>
          </article>
          <article className='album'>
            <a href='#'><p>Album</p></a>
            <p className='cantidad'>(8)</p>
          </article>
          <article className='cartas'>
            <a href='#'><p>Cartas</p></a>
            <p className='cantidad'>(3)</p>
          </article>
        </aside>

        <Dropdown className='d-flex'>
          <Dropdown.Toggle id='dropdown-autoclose-true'>
            Filtro
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='#'>Mayor a menor precio</Dropdown.Item>
            <Dropdown.Item href='#'>Ordenar en orden alfabético</Dropdown.Item>
            <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className='gallery grid-columns-5 p-3'>
          {products.map((product) => (
            <div className='product' key={product.id} style={{ backgroundImage: `url(${product.image})` }} onClick={() => toggleLike(product.id)}>
              {product.liked ? <IconHeart filled /> : <IconHeart />}
              <div>
                <p>{product.product_name}</p>
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
