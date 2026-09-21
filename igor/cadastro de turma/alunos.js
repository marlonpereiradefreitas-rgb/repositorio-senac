let alunos = [
    {
        nome: "João Silva",
        idade: 18,
        cpf: "123.456.789-00",
        data: "2008-05-10"
    },
    {
        nome: "Maria Oliveira",
        idade: 17,
        cpf: "987.654.321-11",
        data: "2009-02-18"
    },
    {
        nome: "Pedro Santos",
        idade: 19,
        cpf: "111.222.333-44",
        data: "2007-11-25"
    }
];

let indiceEdicao = -1;

const formulario = document.getElementById("formAluno");

formulario.addEventListener("submit", salvarAluno);

function salvarAluno(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cpf = document.getElementById("cpf").value;
    const data = document.getElementById("data").value;

    const aluno = {
        nome: nome,
        idade: idade,
        cpf: cpf,
        data: data
    };

    if (indiceEdicao === -1) {

        alunos.push(aluno);

    } else {

        alunos[indiceEdicao] = aluno;
        indiceEdicao = -1;

    }

    formulario.reset();

    listarAlunos();

}

function listarAlunos() {

    const tabela = document.getElementById("tabelaAlunos");

    tabela.innerHTML = "";

    alunos.forEach(function (aluno, indice) {

        tabela.innerHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.cpf}</td>
            <td>${aluno.data}</td>

            <td>
                <button onclick="editarAluno(${indice})">Editar</button>
                <button onclick="excluirAluno(${indice})">Excluir</button>
            </td>

        </tr>
        `;

    });

}

function editarAluno(indice) {

    document.getElementById("nome").value = alunos[indice].nome;
    document.getElementById("idade").value = alunos[indice].idade;
    document.getElementById("cpf").value = alunos[indice].cpf;
    document.getElementById("data").value = alunos[indice].data;

    indiceEdicao = indice;

}

function excluirAluno(indice) {

    alunos.splice(indice, 1);

    listarAlunos();

}

listarAlunos();