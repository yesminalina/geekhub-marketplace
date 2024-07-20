import { Container } from 'react-bootstrap'
import './ProfileMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faHeart, faStore } from '@fortawesome/free-solid-svg-icons'

const diceLogo = <FontAwesomeIcon icon={faDice} size='xl' />
const favLogo = <FontAwesomeIcon icon={faHeart} size='xl' />
const sellLogo = <FontAwesomeIcon icon={faStore} size='xl' />

const menuProfile = () => {
  return (
    <>
      <h2 className='text-uppercase fs-4 mb-5'>Mi Perfil</h2>
      <Container className='pb-4'>
        <div className='d-flex'>
          <i className='me-2'>{diceLogo}</i>
          <a className='fw-bold text-decoration-none'>Mis Productos</a>
        </div>
      </Container>
      <Container className='pb-4'>
        <div className='d-flex'>
          <i className='me-2'>{favLogo}</i>
          <a className='fw-bold text-decoration-none'>Mis Favoritos</a>
        </div>
      </Container>
      <Container className='pb-4'>
        <div className='d-flex'>
          <i className='me-2'>{sellLogo}</i>
          <a className='fw-bold text-decoration-none'>Vender</a>
        </div>
      </Container>
    </>
  )
}
export default menuProfile
