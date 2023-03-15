import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'
import productController from './controller/productController'



const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.getNome)
routes.get('/users/:nome', userController.getUserId)
routes.post('/products', productController.postProduct)

export default routes
