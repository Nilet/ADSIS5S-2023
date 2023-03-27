import { Request, Response } from "express";

class HealthCheckController {
  public async check(req: Request, res: Response) {
    return res.json("Hello World").send();
  }
}

export default new HealthCheckController();
