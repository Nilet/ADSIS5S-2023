import { Request, Response } from 'express';
import { writeFile, readFile } from 'fs/promises'

class productController{
    private writeJson(toWrite: Object){
        writeFile('products.json', JSON.stringify(toWrite, null, 2))
    }
    public async postProduct(req: Request, res: Response){
        const body = req.body;
        try{
            const json = JSON.parse(body);
            if(Array.isArray(json) === true){
                if(json.every(item => {
                    const keys = Object.keys(item);
                    return keys.length === 3 && keys.includes("nome") && keys.includes("qtde") && keys.includes("preco");
                })){
                    this.writeJson(json);
                }
            }else{
                const keys = Object.keys(json);
                if( keys.length === 3 && keys.includes("nome") && keys.includes("qtde") && keys.includes("preco")){
                    this.writeJson(json);
                }
            }

        }catch(e){
            console.error('error parsing the json')
        }


        try{
            writeFile('products.json', JSON.stringify(body, null, 2));
            res.send('Done')
        }catch(e){
            console.error('error writing to the file')
        }


    }
    public async getProduct(req: Request, res: Response){
        res.send('temp');

    }
}

export default new productController();

