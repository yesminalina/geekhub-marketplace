import { Container, Row, Col, Button } from 'react-bootstrap'
import CartCard from '../../components/cartCard/CartCard'
import PaymentForm from '../../components/paymentForm/PaymentForm'
import { CartContext } from '../../context/CartContext'
import { useContext, useEffect } from 'react'

const Payment = () => {
  const { cart, total, getTotal } = useContext(CartContext)

  useEffect(() => {
    getTotal()
  }, [cart])

  return (
    <Container fluid className='min-vh-100 px-5 py-5'>
      <Row>
        <Col xs={12} md={6}>
          <Container className='cart-container py-3'>
            <h2 className='mb-3 title-name'>Revisa tu compra y paga</h2>
            <Row className='justify-content-center gy-3'>
              {cart.map((product) => (
                <Col key={product.id} xs={12}>
                  <CartCard product={product} />
                </Col>
              ))}
              <Col xs={12} className='d-flex justify-content-between align-items-center px-5 py-2 fw-bold'>
                <p>Subtotal</p>
                <p className='text-end'>${total}</p>
              </Col>
              <Col xs={12} className='text-center'>
                <Button variant='primary' size='lg'>Proceder con la compra</Button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} md={6}>
          <PaymentForm />
        </Col>
      </Row>
    </Container>
  )
}
export default Payment
