import { Request, Response } from 'express';
import productService from '../service/productService'

class productController{
    public async postProduct(req: Request, res: Response){
           // res.send(productService.validate(req.body))
            res.send(false)
        }
    public async getProduct(req: Request, res: Response){
    

    }
}

export default new productController();

