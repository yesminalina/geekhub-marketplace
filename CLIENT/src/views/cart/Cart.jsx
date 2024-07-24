import { Container, Row, Col, Button } from 'react-bootstrap'
import CartCard from '../../components/cartCard/CartCard'
import './Cart.css'

const cart = () => {
  return (
    <Container fluid className='px-5 py-5'>
      <Container className='w-50 px-4 pb-5 cart-container'>
        <h2 className='mt-4 mb-3 text-center title-name'>Mi Carrito</h2>
        <Row className='justify-content-center gy-3'>
          <Col xs={12}>
            <CartCard />
          </Col>
          <Col xs={12}>
            <CartCard />
          </Col>
          <Col xs={12}>
            <CartCard />
          </Col>
          <Col xs={12} className='d-flex justify-content-between align-items-center px-5 py-2 fw-bold'>
            <p>Subtotal</p>
            <p className='text-end'>$3.000</p>
          </Col>
          <Col xs={12} className='text-center'>
            <Button variant='primary' size='lg'>Proceder con la compra</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default cart
