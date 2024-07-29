import './ProfileForm.css'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'

const ProfileForm = ({ activeUser }) => {
  return (
    <Container fluid className='py-4 px-2'>
      <Container>
        <Row className='text-center mb-5'>
          <Col className='d-flex justify-content-center align-items-center' md={8}>
            <Form className='w-100'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='email' placeholder='URL de la imagen' />
              </Form.Group>
              <Container className='d-flex justify-content-around p-0'>
                <Button className='w-50 me-2' variant='primary' type='submit'>
                  Subir Foto
                </Button>
                <Button className='w-50' variant='primary' type='submit'>
                  Eliminar Foto
                </Button>
              </Container>
            </Form>
          </Col>
          <Col md={4}>
            <Image src={activeUser.photo_url} roundedCircle fluid className='w-50' />
          </Col>
        </Row>
      </Container>
      <Container fluid className='text-center gap-5'>
        <Form>
          <Row className='mb-3'>
            <Col>
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder={activeUser.first_name} />
            </Col>
            <Col>
              <Form.Label>Apellido</Form.Label>
              <Form.Control placeholder={activeUser.last_name} />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control placeholder={activeUser.phone_number} />
            </Col>
            <Col>
              <Form.Label>Dirección</Form.Label>
              <Form.Control placeholder={activeUser.address} />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder={activeUser.email} />
            </Col>
            <Col>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control placeholder='********' />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Button className='w-75' variant='primary' type='submit'>
                Guardar Cambios
              </Button>
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Button className='w-25' variant='primary' type='submit'>
                Eliminar cuenta
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  )
}
export default ProfileForm
