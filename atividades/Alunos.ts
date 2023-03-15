import { writeFile, readFile } from 'fs/promises'

const alunosArr = [
    { 
        nome: "Chris",
        idade: 20,
        curso: "psicologia"
    },
    {
        nome: "Matheus",
        idade: 20,
        curso: "ads"
    }
]

export class Alunos {
    private alunos = alunosArr
    private filename: string;
    public setFilename(filename: string){
        this.filename = filename;
    }
    public getFilename(){
        return this.filename;
    }

    public writeStudent(){
        try {
            writeFile(this.getFilename(), JSON.stringify(this.alunos, null, 2))
        } catch(e){
            console.error("Erro: ", e)
        }
    }
    async readStudent(){
        const leu = await readFile(this.getFilename(), "utf8");
        console.log("Leu memo?", JSON.parse(leu));
    }
}

