import './Login.css'
import { Card, Button, Form, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const { fnIsAuthenticated } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post('/login', formData)
    window.sessionStorage.setItem('token', response.data.token)
    window.alert('Usuario identificado con éxito 😀.')
    console.log('La respuesta', response)
    navigate('/profile')
    fnIsAuthenticated(true)
  }

  useEffect(() => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      fnIsAuthenticated(true)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClick = () => {
    navigate('/register')
  }

  return (
    <div className='principal-login'>
      <Card className='login-card'>
        <Card.Title className='title-name'>Iniciar Sesión</Card.Title>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type='email' placeholder='tucorreo@mail.com' name='email' onChange={handleChange} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' name='password' onChange={handleChange} />
          </Form.Group>
          <Container className='boton-login'>
            <Button className='boton-login' type='submit' onClick={handleSubmit}>Iniciar Sesión</Button>
          </Container>
        </Form>
      </Card>
      <p id='nohaveAccount'>Aún no tienes una cuenta?</p>
      <Button type='button' onClick={handleClick}>Registrate!</Button>
    </div>
  )
}
export default Login
