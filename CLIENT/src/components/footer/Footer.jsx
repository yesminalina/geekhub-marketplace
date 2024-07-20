import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const instaLogo = <FontAwesomeIcon icon={faInstagram} size='xl' />
const twitterLogo = <FontAwesomeIcon icon={faTwitter} size='xl' />
const facebookLogo = <FontAwesomeIcon icon={faFacebook} size='xl' />

const Footer = () => {
  return (
    <Container fluid className='principalfooter'>
      <Row>
        <Col xs={4}>
          <div>
            <h2>GEEKHUB</h2>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22650034.730859995!2d0!3d-69.72697362493312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAnt%C3%A1rtida!5e0!3m2!1ses!2scl!4v1721459642136!5m2!1ses!2scl' style={{ border: 0, width: '700px', height: '250px' }} allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'> </iframe>
          </div>
        </Col>
        <Col xs={2}>
          <article className='d-flex flex-column pb-2'>
            <h3>Categorías</h3>
            <p>Categoría 1</p>
            <p>Categoría 2</p>
            <p>Categoría 3</p>
            <p>Categoría 4</p>
            <p>Categoría 5</p>
          </article>
          <article className='d-flex flex-column'>
            <h3>Categorías</h3>
            <p>Categoría 1</p>
          </article>
        </Col>
        <Col xs={2} className='d-flex flex-column justify-content-between'>
          <div>
            <NavLink><h3>Ayuda</h3></NavLink>
            <NavLink><p>Preguntas Frecuentes</p></NavLink>
            <NavLink><p>Servicio al cliente</p></NavLink>
            <NavLink><p>Contáctanos</p></NavLink>
          </div>
          <div>
            <NavLink><p>Términos y condiciones</p></NavLink>
            <NavLink><p>Política de privacidad</p></NavLink>
          </div>
        </Col>
        <Col xs={2} className='d-flex flex-column justify-content-end'>
          <article className='d-flex flex-column'>
            <p>Síguenos</p>
            <div>
              <i>{instaLogo}</i>
              <i>{twitterLogo}</i>
              <i>{facebookLogo}</i>
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
