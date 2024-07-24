import { Row, Col, Button, Form } from 'react-bootstrap'
import './PaymentForm.css'

const PaymentForm = () => {
  return (
    <Form className='p-4 form-container'>
      <Row className='mb-3'>
        <Col>
          <Form.Label>Número de tarjeta</Form.Label>
          <Form.Control placeholder='1111 2222 333 444' />
        </Col>
        <Col>
          <Form.Label>CVC</Form.Label>
          <Form.Control placeholder='555' />
        </Col>
      </Row>
      <Form.Group className='mb-3'>
        <Form.Label>Nombre del titular</Form.Label>
        <Form.Control placeholder='Dominga Chuky' />
      </Form.Group>
      <Form.Label>Fecha de vencimiento</Form.Label>
      <Row className='mb-3'>
        <Col xs={2}>
          <Form.Control placeholder='15' />
        </Col>
        <Col xs={6}>
          <Form.Control placeholder='Noviembre' />
        </Col>
        <Col xs={4}>
          <Form.Control placeholder='2027' />
        </Col>
      </Row>
      <Button variant='primary' type='submit' size='lg' className='w-100 mt-2'>Pagar</Button>
    </Form>
  )
}
export default PaymentForm
