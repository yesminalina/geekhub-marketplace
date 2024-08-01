import './Register.css'
import { Card, Button, Col, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [validated, setValidated] = useState(false)
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    password: '',
    email: '',
    photoUrl: ''
  })

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)
    const response = await axios.post('/register', user)
    console.log('La respuesta', response)
    navigate('/login')
  }

  return (
    <div className='principal-register'>
      <Card className='register-card'>
        <Card.Title className='title-name'>Regístrate Ahora!</Card.Title>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustom01'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control required type='text' name='first_name' placeholder='First name' onChange={handleChange} />
              <Form.Control.Feedback>Aceptado!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom02'>
              <Form.Label>Apellido</Form.Label>
              <Form.Control required type='text' name='last_name' placeholder='Last name' onChange={handleChange} />
              <Form.Control.Feedback>Aceptado!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} md='6' controlId='validationCustom03'>
              <Form.Label>Número de teléfono</Form.Label>
              <Form.Control type='text' name='phone_number' placeholder='955544433' onChange={handleChange} required />
              <Form.Control.Feedback type='invalid'>
                Por favor ingresa un número válido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md='6' controlId='validationCustom04'>
              <Form.Label>Dirección</Form.Label>
              <Form.Control type='text' name='address' placeholder='Dirección' onChange={handleChange} required />
              <Form.Control.Feedback type='invalid'>
                Por favor ingresa una dirección válida
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type='email' name='email' placeholder='tucorreo@mail.com' onChange={handleChange} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' placeholder='Password' onChange={handleChange} />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check
              required
              label='Acepto los términos y condiciones'
              feedback='Debes aceptar los términos y condiciones para crear una cuenta'
              feedbackType='invalid'
            />
          </Form.Group>
          <Button type='submit'>Registrarme</Button>
        </Form>
      </Card>
      <p id='haveAccount'>Ya tienes una cuenta?</p>
      <Button type='button' onClick={handleClick}>Iniciar Sesión</Button>
    </div>
  )
}

export default Register
