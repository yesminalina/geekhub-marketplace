import * as sql from '../models/users.dao.js'
import { jwtSign } from '../utils/jwt.js'
import { hashPass, comparePass } from '../utils/bcrypt.js'

export const register = (req, res) => {

  hashPass(req.body.password)
    .then(hashedPass => sql.register(req.body, {password: hashedPass}))
    .then(result => {
      if (result.code) {
        res.status(500).json({ status: false, code: 500, message: 'Ha ocurrido un error, vuelve a intentar' })
        return
      }
      res.status(201).json({ status: true, code: 201, message: 'Usuario creado exitosamente' })
    })
    .catch(error => res.status(500).json({ status: false, code: 500, message: error.message }))
}

export const login = (req, res) => {
  sql.login(req.body.email)
    .then(users => {
      if (users.length === 0) {
        res.status(401).json({ status: false, code: 401, message: 'Usuario y/o contraseña incorrectas' })
        return
      }

      return comparePass(password, [users].password)
        .then(passwordMatch => {
          if (!passwordMatch) {
            res.status(401).json({ status: false, code: 401, message: 'Usuario y/o contraseña incorrectas' })
            return
          }

          const token = jwtSign(user)
          res.status(200).json({ status: true, code: 200, message: { token } })
        })
    })
    .catch(error => {
      res.status(500).json({ status: false, code: 500, message: error.message })
    })
}

export const findProfile = (req, res) => sql.findProfile(req.body.email)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const deleteProfile = (req, res) => sql.deleteProfile(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const updateProfile = (req, res) => sql.updateProfile(req.params.id, req.body)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const updatePhotoProfile = (req, res) => sql.updatePhotoProfile(req.params.id, req.body.photo_url)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const deletePhotoProfile = (req, res) => sql.deletePhotoProfile(req.params.id)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
