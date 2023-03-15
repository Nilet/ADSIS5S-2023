import {Alunos} from './Alunos'

async function main() {
    const novosAlunos = new Alunos();

    novosAlunos.setFilename("xdd.json")

    novosAlunos.writeStudent();

    novosAlunos.readStudent();
}

main()
