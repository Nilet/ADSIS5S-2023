import { Request, Response } from 'express'

const nomes = ["Matheus", "Augusto"]

class UserController{
    public async getNome(req: Request, res: Response){
        return res.json(nomes)
    }
    public async getUserId(req: Request, res: Response){
        const nome = req.params.nome;
        const index = nomes.indexOf(nome)
        if(index !== -1){
            return res.json(index)
        }else{
            return res.json("Not found")
        }
    }
}

export default new UserController()
