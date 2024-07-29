import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileMenu from '../../components/profileMenu/ProfileMenu'
import ProfileForm from '../../components/profileForm/ProfileForm'
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'

const Profile = () => {
  const { id } = useParams()
  const { users } = useContext(UserContext)

  const [activeUser, setActiveUser] = useState('')

  const findUser = (id) => {
    const user = users.find((user) => +id === user.id)
    setActiveUser(user)
  }

  useEffect(() => {
    findUser(id)
  }, [])

  return (
    <Container className='py-5'>
      <Row className='justify-content-around'>
        <Col xs={3} className='profile-menu-section'>
          <ProfileMenu />
        </Col>
        <Col xs={9} className='profile-form-section'>
          <ProfileForm activeUser={activeUser} />
        </Col>
      </Row>
    </Container>
  )
}
export default Profile
