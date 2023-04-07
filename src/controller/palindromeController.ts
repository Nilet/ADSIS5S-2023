import { Request, Response } from "express";
import palindromeService from '../service/palindromeService'

class palindromeController {
    public async getPalindromes(_: Request, res: Response) {
        const result = await palindromeService.palindromeList();

        try {
            res.status(200).send(result);
        } catch (e) {
            res.status(500).send("Server error, please try again");
        }
    }

    public async getPalindromesById(req: Request, res: Response){
        try {
            const id = Number.parseInt(req.params.id)    
            const palindrome: String = await palindromeService.getPalindromeById(id);

            if(typeof palindrome == "undefined"){
                res.status(400).send("Invalid id");
            }
            res.status(200).send(palindrome);
        } catch (e) {
            console.log("Error: ", e);
            res.status(500).send("Server error, please try again");
        }
    }
}

export default new palindromeController()

