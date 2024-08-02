import './ProfileForm.css'
import { useState } from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import axios from 'axios'

const ProfileForm = ({ activeUser }) => {
  const [user, setUser] = useState(activeUser)
  const id = activeUser.id
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = { ...activeUser, ...user }
    const response = await axios.put(`/profile/${id}`, userData)
    console.log('El usuario actualizado es:', response)
  }

  return (
    <Container fluid className='py-4 px-2'>
      <Container>
        <Row className='text-center mb-5'>
          <Col className='d-flex justify-content-center align-items-center' md={8}>
            <Form className='w-100'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control name='photoUrl' type='email' placeholder='URL de la imagen' onChange={handleChange} />
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
            <Image src={activeUser.photoUrl} roundedCircle fluid className='w-50' />
          </Col>
        </Row>
      </Container>
      <Container fluid className='text-center gap-5'>
        <Form>
          <Row className='mb-3'>
            <Col>
              <Form.Label>Nombre</Form.Label>
              <Form.Control name='firstName' placeholder={activeUser.firstName} onChange={handleChange} />
            </Col>
            <Col>
              <Form.Label>Apellido</Form.Label>
              <Form.Control name='lastName' placeholder={activeUser.lastName} onChange={handleChange} />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control name='phoneNumber' placeholder={activeUser.phoneNumber} onChange={handleChange} />
            </Col>
            <Col>
              <Form.Label>Dirección</Form.Label>
              <Form.Control name='address' placeholder={activeUser.address} onChange={handleChange} />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' placeholder={activeUser.email} disabled />
            </Col>
            <Col>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name='password' placeholder='********' onChange={handleChange} />
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col>
              <Button className='w-75' variant='primary' type='submit' onClick={handleSubmit}>
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
