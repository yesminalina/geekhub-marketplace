import './Navigation.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/img/logo-pink.png'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserContext } from '../../context/UserContext'
import { ProductsContext } from '../../context/ProductsContext'

const cartLogo = <FontAwesomeIcon icon={faCartShopping} size='xl' />

const Navigation = () => {
  const [search, setSearch] = useState('')
  const { cart, fnCart } = useContext(CartContext)
  const { isAuthenticated, fnIsAuthenticated } = useContext(UserContext)
  const { products } = useContext(ProductsContext)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // Handles search button
  const navigate = useNavigate()

  const handleFilter = (e) => {
    e.preventDefault()
    const searchQuery = search.toLowerCase()
    navigate(`/catalogue/?searchQuery=${searchQuery}`)
  }

  // Handles links to catalogue filtered by category
  const handleFilterLink = (e) => {
    e.preventDefault()
    const category = e.target.name.toLowerCase()
    navigate(`/catalogue/?category=${category}`)
  }

  // Logout
  const handleLogout = () => {
    window.sessionStorage.removeItem('token')
    fnIsAuthenticated(false)
  }

  const quantity = cart.map((product) => (
    product.qty
  ))
  const cantidad = quantity.reduce((acc, item) => acc + item, 0)

  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      fnIsAuthenticated(true)
    }
  }, [isAuthenticated])

  useEffect(() => {
    const newCart = cart.filter((item) => products.some((product) => product.id === item.id))
    fnCart(newCart)
  }, [products])

  return (
    <>
      <Navbar expand='lg' className='navbg'>
        <Container fluid className='mainContainer'>
          <Container className='firstContainer'>
            <Navbar.Brand>
              <NavLink to='/'>
                <img src={logo} className='logo-img' />
              </NavLink>
            </Navbar.Brand>
          </Container>
          <Container className='secondContainer'>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <div id='navbarScroll'>
              <Form className='d-flex w-100'>
                <Form.Control type='text' placeholder='Busca un producto' className='mr-sm-2 me-sm-2 w-100' aria-label='Search' value={search} onChange={handleSearch} />
                <Button className='search-btn' bsPrefix='custom-btn' onClick={handleFilter}>Buscar</Button>
              </Form>
              <Nav className='linksContainer me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                <NavLink to='/' className='navlinks'>Inicio</NavLink>
                <NavLink to='/catalogue' className='navlinks'>Tienda</NavLink>
                <NavDropdown title='Categorias' id='navbarScrollingDropdown'>
                  <NavDropdown.Item as={Link} to='boardgames' className='navdropitem' name='Juegos de Mesa' onClick={handleFilterLink}>Juegos de Mesa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='tcg' className='navdropitem' name='TCG' onClick={handleFilterLink}>TCG</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='figures&collectionable' className='navdropitem' name='Figuras Coleccionables' onClick={handleFilterLink}>Figuras Coleccionables</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='mangas&comics' className='navdropitem' name='Mangas y Cómics' onClick={handleFilterLink}>Mangas y Cómics</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='albums&laminas' className='navdropitem' name='Álbumes y Láminas' onClick={handleFilterLink}>Álbumes y Láminas</NavDropdown.Item>
                </NavDropdown>
                <NavLink to='/about-us' className='navlinks'>Sobre Nosotros</NavLink>
                <NavLink to='https://chat.whatsapp.com/CGobfcrDWaKFOF8pRffIRI' target='_blank' className='navlinks'>Contacto</NavLink>
              </Nav>
            </div>
          </Container>
          {isAuthenticated
            ? <Container className='thirdContainer'>
              <NavLink to='/profile' className='navlinks'>Perfil</NavLink>
              <NavLink to='/' className='navlinks' onClick={handleLogout}>Cerrar Sesión</NavLink>
              <NavLink to='/cart' className='cart'>{cantidad > 0 ? cantidad : ''}{cartLogo}</NavLink>
            </Container>
            : <Container className='thirdContainer'>
              <NavLink to='/register' className='navlinks'>Registrar</NavLink>
              <NavLink to='/login' className='navlinks'>Iniciar Sesión</NavLink>
              <NavLink to='/register' className='cart'>{cantidad > 0 ? cantidad : ''}{cartLogo}</NavLink>
            </Container>}
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
