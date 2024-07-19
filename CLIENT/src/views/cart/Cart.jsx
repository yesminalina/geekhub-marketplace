import { Container, Row, Col, Button } from 'react-bootstrap'
import CartCard from '../../components/cartCard/CartCard'

const cart = () => {
  return (
    <Container fluid className='min-vh-100 px-5 py-5'>
      <h2 className='text-uppercase fs-4 mb-5'>Mi Carrito</h2>
      <Container className='w-50 border border-2 rounded-2 px-4 pb-5'>
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
