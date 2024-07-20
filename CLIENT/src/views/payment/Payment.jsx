import { Container, Row, Col } from 'react-bootstrap'
import CartCard from '../../components/cartCard/CartCard'
import PaymentForm from '../../components/paymentForm/PaymentForm'

const Payment = () => {
  return (
    <Container fluid className='min-vh-100 px-5 py-5'>
      <h2 className='text-uppercase fs-4 mb-5'>Revisa tu compra y paga</h2>
      <Row>
        <Col xs={12} md={6}>
          <Container className='border border-2 rounded-2 px-4 pb-5'>
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
