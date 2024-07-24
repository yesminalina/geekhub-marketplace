import { Container, Col, Row, Image, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const trashLogo = <FontAwesomeIcon icon={faTrash} size='xl' />

const CartCard = ({ productId, title, description, qty, price, imageUrl }) => {
  const { addToCard, removeFromCart } = useContext(CartContext)

  return (
    <Container className='border-bottom border-2'>
      <Row className='px-4 py-3'>
        <Col xs={12} md={4} className='p-0'>
          <Image rounded fluid className='p-0' src={`${imageUrl}`} />
        </Col>
        <Col xs={10} md={6} className='d-flex flex-column justify-content-between ps-4'>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className='d-flex justify-content-start align-items-center'>
            <p className='m-0 pe-2'>Cantidad: {qty}</p>
            <Form.Control size='lg' type='number' placeholder='1' />
            <i onClick={() => removeFromCart(productId)} className='px-2'>{trashLogo}</i>
          </div>
        </Col>
        <Col md={12} lg={2} className='d-flex justify-content-end align-items-end'>
          <p className='m-0 py-2'>{price}</p>
        </Col>
      </Row>
    </Container>
  )
}
export default CartCard
