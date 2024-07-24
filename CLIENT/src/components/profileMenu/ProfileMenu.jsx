import { Container, Stack } from 'react-bootstrap'
import './ProfileMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice, faHeart, faStore } from '@fortawesome/free-solid-svg-icons'

const diceLogo = <FontAwesomeIcon icon={faDice} size='xl' />
const favLogo = <FontAwesomeIcon icon={faHeart} size='xl' />
const sellLogo = <FontAwesomeIcon icon={faStore} size='xl' />

const menuProfile = () => {
  return (
    <Container fluid className='py-5 px-2'>
      <h2 className='text-uppercase fs-4 mb-5 title-name'>Mi Perfil</h2>
      <Stack gap={3}>
        <div className='p-2'>
          <i className='me-2'>{diceLogo}</i>
          <a className='fw-bold text-decoration-none title-menu'>Mis Productos</a>
        </div>
        <div className='p-2'>
          <i className='me-2'>{favLogo}</i>
          <a className='fw-bold text-decoration-none title-menu'>Mis Favoritos</a>
        </div>
        <div className='p-2'>
          <i className='me-2'>{sellLogo}</i>
          <a className='fw-bold text-decoration-none title-menu'>Vender</a>
        </div>
      </Stack>
    </Container>
  )
}
export default menuProfile
