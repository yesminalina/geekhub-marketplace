import './Catalogue.css'
import { useContext, useState } from 'react'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import IconHeart from '../../components/iconHeart/IconHeart'
import { Badge, Dropdown } from 'react-bootstrap'

const Catalogue = () => {
  const { products, toggleLike } = useContext(ProductsContext)
  const [sortBy, setSortBy] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const category = queryParams.get('category')
  const searchQuery = queryParams.get('searchQuery')

  console.log(products[0])

  const filterStore = (sortBy) => {
    let result

    if (category) {
      result = products.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      )
    } else if (searchQuery) {
      result = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    } else {
      result = [...products]
    }

    if (sortBy === 'asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'ascName') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'descName') {
      result.sort((a, b) => b.title.localeCompare(a.title))
    }

    return result
  }

  const filteredProducts = filterStore(sortBy)

  const handleFilterLink = (e) => {
    e.preventDefault()
    navigate(`/catalogue/?category=${e.target.name}`)
  }

  const handleCatalogue = (products) => {
    const categoryCount = products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    }, {})

    return Object.entries(categoryCount).map(([category, count]) => ({
      category,
      count
    }))
  }
  console.log(handleCatalogue(products))

  return (
    <>
      <div className='grid-container'>
        <aside>
          <h3>Categorías</h3>
          {
            handleCatalogue(products).map(({ category, count }) => (
              <article className='category' key={category}>
                <p><NavLink name={category} onClick={handleFilterLink}>{category}:</NavLink></p>
                <p className='cantidad'>({count})</p>
              </article>
            ))
          }
        </aside>

        <Dropdown className='d-flex'>
          <Dropdown.Toggle id='dropdown-autoclose-true'>
            Filtro
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setSortBy('asc')}>Precio de menor a mayor</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy('desc')}>Precio de mayor a menor</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy('ascName')}>Alfabético de A-Z</Dropdown.Item>
            <Dropdown.Item onClick={() => setSortBy('descName')}>Alfabético de Z-A</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className='gallery grid-columns-5 p-3'>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <div onClick={() => { toggleLike(product.id) }} className='cursor-pointer'>{product.liked ? <IconHeart filled /> : <IconHeart />}</div>
              <div onClick={() => navigate(`/product-details/${product.id}`)} className='producto' style={{ backgroundImage: `url(${product.imageUrl})` }}>
                <div>
                  <p>{product.title}</p>
                  <h6><Badge bg='dark'>Precio: ${(product.price).toLocaleString('es-CL')}</Badge></h6>
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
