import { Request, Response } from 'express'

const nomes = ["matheus", "augusto", "christina", "terry", "thiago"]

class UserController{
    public async getNome(req: Request, res: Response){
        const capitalizedNames = nomes.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1));
        return res.json(capitalizedNames);
    }
    public async getUserId(req: Request, res: Response){
        const nome = req.params.nome.toLowerCase();
        const index = nomes.indexOf(nome)
        if(index !== -1){
            return res.json(index)
        }else{
            return res.json("Not found")
        }
    }
}

export default new UserController()
