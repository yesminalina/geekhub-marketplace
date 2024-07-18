import { Container, Row, Col } from 'react-bootstrap'
import ProfileMenu from '../../components/profileMenu/ProfileMenu'
import ProfileForm from '../../components/profileForm/ProfileForm'
import './Profile.css'

const Profile = () => {
  return (
    <Container className='min-vh-100 py-5'>
      <Row className='min-vh-100'>
        <Col xs={4} className='border-end'>
          <ProfileMenu />
        </Col>
        <Col xs={8}>
          <ProfileForm />
        </Col>
      </Row>
    </Container>
  )
}
export default Profile
