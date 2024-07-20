import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import './MyProducts.css'

const MyProducts = () => {
  return (
    <>
      <Container className='principal'>
        <Row className='trio'>
          <Col md={5} id='products'>
            <Container className='product'>
              <Card.Title>Mis Productos</Card.Title>
              <Card id='product'>{/* Este se deberia iterar */}
                <Row>
                  <Col>Detalle del producto</Col>
                  <Col>Foto</Col>
                  <Col>Interaccion</Col>
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
              <Card.Title>Publica un producto</Card.Title>
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
