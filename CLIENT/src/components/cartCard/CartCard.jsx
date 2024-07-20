import { Container, Col, Row, Image, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const trashLogo = <FontAwesomeIcon icon={faTrash} size='xl' />

const CartCard = () => {
  return (
    <Container className='border-bottom border-2'>
      <Row className='px-4 py-3'>
        <Col xs={12} md={4} className='p-0'>
          <Image src='https://mycollectorsoutpost.com/cdn/shop/files/luna-sailor-moon-cosmos-sofvimates-statue1_1100x.jpg?v=1704901330' rounded fluid className='p-0' />
        </Col>
        <Col xs={10} md={6} className='d-flex flex-column justify-content-between ps-4'>
          <div>
            <h2>Nombre del producto</h2>
            <p>Características del producto</p>
          </div>
          <div className='d-flex justify-content-start align-items-center'>
            <p className='m-0 pe-2'>Cantidad:</p>
            <Form.Control size='lg' type='number' placeholder='1' />
            <i className='px-2'>{trashLogo}</i>
          </div>
        </Col>
        <Col md={12} lg={2} className='d-flex justify-content-end align-items-end'>
          <p className='m-0 py-2'>$3.000</p>
        </Col>
      </Row>
    </Container>
  )
}
export default CartCard
