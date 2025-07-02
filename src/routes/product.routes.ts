import { Router } from 'express'
import { ProductController } from '../controllers/productController'
import { categoryHandle } from '../middlewares/categoryHandle'

const productRouter = Router()
const productController = new ProductController()

productRouter.post('/', categoryHandle, productController.create)

export default productRouter
