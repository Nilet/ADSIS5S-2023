import { Request, Response } from 'express';
import productService from '../service/productService'

class productController{
    public async postProduct(req: Request, res: Response){
           res.sendStatus(productService.validate(req.body))
        }
    public async getProduct(req: Request, res: Response){
        try {
            const result = await productService.getStock();
            res.status(200).send(result)
        } catch (e) {
            res.status(204).send("Sorry, no stock available");
        }

    }
}

export default new productController();

