import { Router } from 'express'
import * as productsController from '../controllers/scoresController.js'

const router = Router()

router.post('/product-details/score/:productId', productsController.scoreProduct)
router.get('/product-details/score/:productId', productsController.findScoreProduct)
router.get('/product-details/score/:userId/:productId', productsController.findScoreByUser)
router.put('/product-details/score/:productId', productsController.updateScoreProduct)

export default router
