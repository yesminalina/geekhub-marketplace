import './Catalogue.css'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext'
import IconHeart from '../../components/iconHeart/IconHeart'
import { Badge, Dropdown } from 'react-bootstrap'

const Catalogue = () => {
  const { products } = useContext(ProductContext)

  const listCategory = data.map((category) => category === category.name)

  return (
    <>
      <div className='grid-container'>
        <aside>
          <h3>Categorías</h3>
          <h3>Categorías</h3>
          <article className='Juegos de Mesa'>
            <a href='#'><p>Juegos de Mesa</p></a>
            <p className='cantidad'>()</p>
          </article>
          <article className='tcg'>
            <a href='#'><p>TCG</p></a>
            <p className='cantidad'>(150)</p>
          </article>
          <article className='Figures'>
            <a href='#'><p>Figuras</p></a>
            <p className='cantidad'>(8)</p>
          </article>
          <article className='cartas'>
            <a href='#'><p>Cartas</p></a>
            <p className='cantidad'>(3)</p>
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
            <div className='producto' key={product.id} style={{ backgroundImage: `url(${product.image_url})` }}>
              {product.liked ? <IconHeart filled /> : <IconHeart />}
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
