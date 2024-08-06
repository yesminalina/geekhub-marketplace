import { Router } from 'express'
import * as usersController from '../controllers/usersController.js'


const router = Router()

router.post('/register', usersController.register)
router.post('/login', usersController.login)
router.get('/profile', usersController.findProfile)
router.delete('/profile/:id', usersController.deleteProfile)
router.put('/profile/:id', usersController.updateProfile)
router.put('/profile/:id', usersController.updatePhotoProfile)
router.put('/profile/:id', usersController.deletePhotoProfile)

export default router