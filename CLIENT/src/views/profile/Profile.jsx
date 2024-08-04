import './Profile.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileMenu from '../../components/profileMenu/ProfileMenu'
import ProfileForm from '../../components/profileForm/ProfileForm'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

const Profile = () => {
  const { activeUser, fnActiveUser, isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()

  const getUserData = () => {
    const token = window.sessionStorage.getItem('token')
    axios.get('./profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data: [user] }) => {
        fnActiveUser({ ...user[0] })
        console.log(user)
      })
      .catch(({ response: { data } }) => {
        console.error(data)
        navigate('/register')
      })
  }

  useEffect(getUserData, [])
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/register')
    }
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
