import { Router } from 'express'
import * as productsController from '../controllers/productsController.js'

const router = Router()

router.get('/catalogue', productsController.findProducts)
router.get('/product-details/:id', productsController.findProductById)
router.post('/my-products', productsController.createProduct)
router.get('/my-products/:user_id', productsController.findUserProducts)
router.put('/my-products/:id', productsController.updateProduct)
router.delete('/my-products/:id', productsController.deleteProduct)
router.get('/product-details/score/:id', productsController.findScoreProduct)
router.put('/product-details/score/:id', productsController.scoreProduct)

export default router
