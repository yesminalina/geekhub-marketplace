import './Navigation.css'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Navbar expand='lg' className='navbg'>
        <Container fluid>
          <Navbar.Brand><NavLink to='/'>GeekHub</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to='/' className='navlinks'>Home</NavLink>
              <NavDropdown title='Categorias' id='navbarScrollingDropdown'>
                <NavDropdown.Item to='#action3' className='navdropitem'>Categoria 1</NavDropdown.Item>
                <NavDropdown.Item to='#action4' className='navdropitem'>Categoria 2</NavDropdown.Item>
                <NavDropdown.Item to='#action5' className='navdropitem'>Categoria 3</NavDropdown.Item>
              </NavDropdown>
              <NavLink to='/about-us' className='navlinks'>Sobre Nosotros</NavLink>
              <NavLink to='/contact' className='navlinks'>Contacto</NavLink>
              <NavLink to='/help' className='navlinks'>Ayuda</NavLink>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button className='search-btn'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
