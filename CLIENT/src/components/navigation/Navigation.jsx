import './Navigation.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const cartLogo = <FontAwesomeIcon icon={faCartShopping} size='xl' />

const Navigation = () => {
  return (
    <>
      <Navbar expand='lg' className='navbg'>
        <Container fluid className='mainContainer'>
          <Container className='firstContainer'>
            <Navbar.Brand><NavLink to='/'>GeekHub</NavLink></Navbar.Brand>
          </Container>
          <Container className='secondContainer'>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <div id='navbarScroll'>
              <Form className='d-flex w-100'>
                <Form.Control type='search' placeholder='Search' className='mr-sm-2 me-sm-2 w-100' aria-label='Search' />
                <Button className='search-btn' bsPrefix='custom-btn'>Search</Button>
              </Form>
              <Nav className='linksContainer me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                <NavLink to='/' className='navlinks'>Home</NavLink>
                <NavDropdown title='Categorias' id='navbarScrollingDropdown'>
                  <NavDropdown.Item to='#action3' className='navdropitem'>Juegos de Mesa</NavDropdown.Item>
                  <NavDropdown.Item to='#action4' className='navdropitem'>TCG</NavDropdown.Item>
                  <NavDropdown.Item to='#action5' className='navdropitem'>Figuras Coleccionables</NavDropdown.Item>
                  <NavDropdown.Item to='#action5' className='navdropitem'>Mangas y Cómics</NavDropdown.Item>
                  <NavDropdown.Item to='#action5' className='navdropitem'>Álbunes y Láminas</NavDropdown.Item>
                </NavDropdown>
                <NavLink to='/about-us' className='navlinks'>Sobre Nosotros</NavLink>
                <NavLink to='/contact' className='navlinks'>Contacto</NavLink>
                <NavLink to='/help' className='navlinks'>Ayuda</NavLink>
              </Nav>
            </div>
          </Container>
          <Container className='thirdContainer'>
            <NavLink to='/register' className='navlinks'>Registrar</NavLink>
            <NavLink to='/login' className='navlinks'>Iniciar Sesión</NavLink>
            <NavLink to='/cart'>{cartLogo}</NavLink>
          </Container>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
