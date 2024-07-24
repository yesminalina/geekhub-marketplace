import { Container, Row, Col } from 'react-bootstrap'
import ProfileMenu from '../../components/profileMenu/ProfileMenu'
import ProfileForm from '../../components/profileForm/ProfileForm'
import './Profile.css'

const Profile = () => {
  return (
    <Container className='py-5'>
      <Row className='justify-content-around'>
        <Col xs={3} className='profile-menu-section'>
          <ProfileMenu />
        </Col>
        <Col xs={9} className='profile-form-section'>
          <ProfileForm />
        </Col>
      </Row>
    </Container>
  )
}
export default Profile
