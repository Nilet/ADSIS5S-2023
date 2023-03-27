import { Request, Response } from "express";
import productService from "../service/productService";

class productController {
  public postProduct(req: Request, res: Response) {
    const result = productService.validate(req.body);
    switch (result) {
      case "BodyError":
        res.status(400).send("Invalid body");
        break;
      case "Done":
        res.status(201).send("Created successfully");
        break;
      case "CreatingError":
        res.status(500).send("Invalid body");
        break;

      default:
        break;
    }
  }
  public async getProduct(_req: Request, res: Response) {
    try {
      const result = await productService.getStock();
      res.status(200).send(result);
    } catch (e) {
    console.error("Error: " + e);
      res.status(204).send("Sorry, no stock available");
    }
  }
}

export default new productController();
