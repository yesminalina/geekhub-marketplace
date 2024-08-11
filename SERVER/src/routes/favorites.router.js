import { Router } from 'express'
import * as favoritesController from '../controllers/favoritesController.js'
import { authToken } from '../middlewares/authentication.middleware.js'

const router = Router()

router.get('/favorites/:userId', authToken, favoritesController.findLikeProducts )
router.post('/favorites/:userId', authToken, favoritesController.addToFavorites )
router.delete('/favorites/:userId', authToken, favoritesController.removeFavorites )

export default router
