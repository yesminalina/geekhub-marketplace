import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/img/logo-white.png'

const instaLogo = <FontAwesomeIcon icon={faInstagram} size='2xl' />
const twitterLogo = <FontAwesomeIcon icon={faTwitter} size='2xl' />
const facebookLogo = <FontAwesomeIcon icon={faFacebook} size='2xl' />
const map = 'http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22650034.730859995!2d0!3d-69.72697362493312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b9967b3390754b%3A0x6e52be1f740f2075!2sAnt%C3%A1rtida!5e0!3m2!1ses!2scl!4v1721459642136!5m2!1ses!2scl'

const Footer = () => {
  return (
    <Container fluid className='principalfooter py-4 px-4'>
      <Row>
        <Col xs={4}>
          <div>
            <img src={logo} className='logo-img' />
            <iframe src={map} style={{ border: 0, width: '350px', height: '200px' }} loading='lazy' referrerpolicy='no-referrer-when-downgrade' className='rounded-1'> </iframe>
          </div>
        </Col>
        <Col xs={3} className='d-flex flex-column justify-content-between'>
          <article className='d-flex flex-column justify-content-between pb-2'>
            <h5>Categorías</h5>
            <NavLink className='mb-1'>Juegos de Mesa</NavLink>
            <NavLink className='mb-1'>TCG</NavLink>
            <NavLink className='mb-1'>Figuras Coleccionables</NavLink>
            <NavLink className='mb-1'>Mangas y Cómics</NavLink>
            <NavLink className='mb-1'>Álbumes y Láminas</NavLink>
          </article>
          <article className='d-flex flex-column'>
            <h5>Vende</h5>
            <NavLink>Publica un producto</NavLink>
          </article>
        </Col>
        <Col xs={3} className='d-flex flex-column justify-content-between'>
          <div className='d-flex flex-column'>
            <NavLink><h5>Ayuda</h5></NavLink>
            <NavLink>Preguntas Frecuentes</NavLink>
            <NavLink>Servicio al cliente</NavLink>
            <NavLink>Contáctanos</NavLink>
          </div>
          <div className='d-flex flex-column'>
            <NavLink>Términos y condiciones</NavLink>
            <NavLink>Política de privacidad</NavLink>
          </div>
        </Col>
        <Col xs={2} className='d-flex flex-column justify-content-end'>
          <article className='d-flex flex-column'>
            <p>Síguenos</p>
            <div>
              <i className='pe-2'>{instaLogo}</i>
              <i className='pe-2'>{twitterLogo}</i>
              <i className='pe-2'>{facebookLogo}</i>
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer