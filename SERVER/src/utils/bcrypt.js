import bcrypt from 'bcrypt'

export const hashPass = (password) => bcrypt.hashSync(password, 10)

export const comparePass = (password, encryptedPass) => bcrypt.compareSync(password, encryptedPass)
