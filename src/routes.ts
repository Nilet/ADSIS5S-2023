import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'
import productController from './controller/productController'
import palindromeController from './controller/palindromeController'



const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.getNome)
routes.get('/users/:nome', userController.getUserId)
routes.post('/products', productController.postProduct)
routes.get('/products-stock', productController.getProduct)
routes.get('/palindrome', palindromeController.getPalindromes)
routes.get('/palindrome/:id', palindromeController.getPalindromesById)

export default routes
