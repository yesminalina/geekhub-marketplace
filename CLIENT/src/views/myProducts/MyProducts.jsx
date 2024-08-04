import './MyProducts.css'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
const edit = <FontAwesomeIcon icon={faEdit} size='1x' />
const trash = <FontAwesomeIcon icon={faTrash} size='1x' />

const MyProducts = () => {
  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/register')
    }
  }, [])

  return (
    <>
      <Container className='twosection'>
        <Row className='trio'>
          <Col md={5} id='products'>
            <Container className='product'>
              <Card.Title id='my-products'>Mis Productos</Card.Title>
              <Card id='product'>{/* Este se deberia iterar */}
                <Row>
                  <Col md={5}>
                    <p>Nombre</p>
                    <p>Precio</p>
                    <p>Descripción</p>
                  </Col>
                  <Col md={5}>Foto</Col>
                  <Col md={2} id='interaction'>
                    <Button className='interaction'>{edit}</Button>
                    <Button className='interaction'>{trash}</Button>
                  </Col>
                </Row>
                <div className='horizontal'> </div>
              </Card>
            </Container>
          </Col>
          <Col md={1} id='separator'>
            <div className='vertical'> </div>
          </Col>
          <Col md={5} id='post'>
            <Card className='new-product'>
              <Card.Title id='publish-now'>Publica un producto</Card.Title>
              <Row>
                <Form.Group as={Col} md='6' controlId='validationCustom01'>
                  <Form.Label>URL de la imagen</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='https://imagendeejemplo.com'
                  />
                </Form.Group>
                <Form.Group as={Col} md='6' controlId='validationCustom01'>
                  <Form.Label>Nombre del Producto</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Nombre del producto'
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md='6' controlId='validationCustom01'>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='precio del producto'
                  />
                </Form.Group>
                <Form.Group as={Col} md='6' controlId='validationCustom01'>
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Descripción del producto'
                  />
                </Form.Group>
                {/*  AGREGAREMOS LA CANTIDAD? */}
              </Row>
              <Button>Publicar Producto</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default MyProducts
