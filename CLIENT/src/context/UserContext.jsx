import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState({})

  const fnActiveUser = (user) => setActiveUser(user)

  const globalState = { activeUser, fnActiveUser }

  return (
    <UserContext.Provider value={globalState}>
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
