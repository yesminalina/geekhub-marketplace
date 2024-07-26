import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileMenu from '../../components/profileMenu/ProfileMenu'
import ProfileForm from '../../components/profileForm/ProfileForm'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const Profile = () => {
  const { id } = useParams()

  const { users, findUser } = useContext(UserContext)
  console.log(users)
  findUser(id)
  console.log(findUser(2))

  return (
    <Container className='py-5'>
      <Row className='justify-content-around'>
        <Col xs={3} className='profile-menu-section'>
          <ProfileMenu />
        </Col>
        <Col xs={9} className='profile-form-section'>
          <ProfileForm findUser={findUser} />
        </Col>
      </Row>
    </Container>
  )
}
export default Profile
