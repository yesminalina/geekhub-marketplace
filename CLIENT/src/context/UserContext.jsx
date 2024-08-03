import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const fnActiveUser = (user) => setActiveUser(user)
  const fnIsAuthenticated = (token) => setIsAuthenticated(token)

  const globalState = { activeUser, fnActiveUser, isAuthenticated, fnIsAuthenticated }

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
