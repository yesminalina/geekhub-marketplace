import { Router } from 'express'
import * as favoritesController from '../controllers/favoritesController.js'

const router = Router()

router.get('/favorites/:id', favoritesController.findLikeProducts )
router.post('/favorites/:id', favoritesController.addToFavorites )
router.delete('/favorites/:id', favoritesController.removeFavorites )

export default router
