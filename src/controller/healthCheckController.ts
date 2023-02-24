import { Request, Response } from 'express'

class HealthCheckController{
    public async check(req: Request, res: Response) {
        res.set('Access-Control-Allow-Origin', '*');
        return res.json('Hello World')
    }
}

export default new HealthCheckController()
