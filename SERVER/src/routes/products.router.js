import { Router } from 'express'
import * as productsController from '../controllers/productsController.js'

const router = Router()

router.get('/catalogue', productsController.findProducts)
router.get('/product-details/:id', productsController.findProductById)
router.post('/my-products', productsController.createProduct)
router.put('/my-products', productsController.updateProduct)
router.delete('/my-products', productsController.deleteProduct)
router.get('/product-details', productsController.findScoreProduct)
router.put('/product-details', productsController.scoreProduct)

export default router
// falta hacer la ruta de los productos que crea el usuario