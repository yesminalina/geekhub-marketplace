import './Catalogue.css'
import { useContext } from 'react'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import IconHeart from '../../components/iconHeart/IconHeart'
import { Badge, Dropdown } from 'react-bootstrap'

const Catalogue = () => {
  const { products, toggleLike } = useContext(ProductsContext)

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const category = queryParams.get('category')
  const searchQuery = queryParams.get('searchQuery')

  const filterStore = () => {
    let result
    if (category) {
      result = products.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()))
    } else if (searchQuery) {
      result = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    } else {
      result = products
    }
    return result
  }

  const handleFilterLink = (e) => {
    e.preventDefault()
    navigate(`/catalogue/?category=${e.target.name}`)
  }

  /* const handleLength = (e) => {
    const categoryLength = products.filter((product) => product.category === e.target.name).length
    return categoryLength
  } */

  return (
    <>
      <div className='grid-container'>
        <aside>
          <h3>Categorías</h3>
          <article className='category'>
            <p><NavLink name='Juegos de Mesa' onClick={handleFilterLink}>Juegos de Mesa</NavLink></p>
            <p className='cantidad'>({})</p>
          </article>
          <article className='category'>
            <p><NavLink name='TCG' onClick={handleFilterLink}>TCG</NavLink></p>
            <p className='cantidad'>({})</p>
          </article>
          <article className='category'>
            <p><NavLink name='Figuras coleccionables' onClick={handleFilterLink}>Figuras coleccionables</NavLink></p>
            <p className='cantidad'>(8)</p>
          </article>
          <article className='category'>
            <p><NavLink name='Mangas y Cómics' onClick={handleFilterLink}>Mangas y Cómics</NavLink></p>
            <p className='cantidad'>(3)</p>
          </article>
          <article className='category'>
            <p><NavLink name='Álbumes y Láminas' onClick={handleFilterLink}>Álbumes y Láminas</NavLink></p>
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
          </Dropdown.Menu>
        </Dropdown>

        <div className='gallery grid-columns-5 p-3'>
          {filterStore().map((product) => (
            <div key={product.id}>
              <div onClick={() => { toggleLike(product.id) }} className='cursor-pointer'>{product.liked ? <IconHeart filled /> : <IconHeart />}</div>
              <div onClick={() => navigate(`/product-details/${product.id}`)} className='producto' style={{ backgroundImage: `url(${product.image_url})` }}>
                <div>
                  <p>{product.title}</p>
                  <h6><Badge bg='dark'>Precio: {product.price}</Badge></h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Catalogue
