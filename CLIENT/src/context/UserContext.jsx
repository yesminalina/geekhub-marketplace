import { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const { id } = useParams()
  const getUsers = async () => {
    fetch('./json/MOCK_DATA_USERS.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('No trae los datos')
        }
        return res.json()
      })
      .then((data) => {
        setUsers(data)
        console.log(data[0])
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const findUser = (id) => users.find((user) => +id === user.id)

  useEffect(() => {
    getUsers()
  }, [id, setUsers])

  const globalState = { users, findUser }

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
