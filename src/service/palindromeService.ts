import { readFile } from 'fs/promises'

class palindromeService {
    public async palindromeList(){
        const palindromes = await this.readPalindromesFile();

        palindromes.pop()

        return palindromes;
    }

    public async getPalindromeById(id: number){
        const palindromes = await this.readPalindromesFile();

        return palindromes[id];
    }

    private async readPalindromesFile(){
        const palindromesFile = await readFile('./palindromes', 'utf-8');
        const palindromes = palindromesFile.split('\n');

        return palindromes;
    }
}

export default new palindromeService()
