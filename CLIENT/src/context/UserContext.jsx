import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  const getUsers = () => {
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
  }, [])

  const globalState = { users, findUser }

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
