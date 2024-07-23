import './Login.css'
import { Card, Button, Form, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

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
            <Form.Control type='email' placeholder='tucorreo@mail.com' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Container className='boton-login'>
            <Button className='boton-login' type='submit'>Iniciar Sesión</Button>
          </Container>
        </Form>
      </Card>
      <p id='nohaveAccount'>Aún no tienes una cuenta?</p>
      <Button type='button' onClick={handleClick}>Registrate!</Button>
    </div>
  )
}
export default Login
