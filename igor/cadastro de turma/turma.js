let turmas = [

    {
        nome: "1° Informática",
        professor: "Carlos Alberto",
        quantidade: 30
    },

    {
        nome: "2° Administração",
        professor: "Fernanda Lima",
        quantidade: 28
    },

    {
        nome: "3° Agropecuária",
        professor: "Ricardo Souza",
        quantidade: 32
    }

];

let indiceEdicao = -1;

const formulario = document.getElementById("formTurma");

formulario.addEventListener("submit", salvarTurma);

function salvarTurma(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const professor = document.getElementById("professor").value;
    const quantidade = document.getElementById("quantidade").value;

    const turma = {

        nome: nome,
        professor: professor,
        quantidade: quantidade

    };

    if(indiceEdicao === -1){

        turmas.push(turma);

    }else{

        turmas[indiceEdicao] = turma;
        indiceEdicao = -1;

    }

    formulario.reset();

    listarTurmas();

}

function listarTurmas(){

    const tabela = document.getElementById("tabelaTurmas");

    tabela.innerHTML = "";

    turmas.forEach(function(turma, indice){

        tabela.innerHTML += `

        <tr>

            <td>${turma.nome}</td>

            <td>${turma.professor}</td>

            <td>${turma.quantidade}</td>

            <td>

                <button onclick="editarTurma(${indice})">Editar</button>

                <button onclick="excluirTurma(${indice})">Excluir</button>

            </td>

        </tr>

        `;

    });

}

function editarTurma(indice){

    document.getElementById("nome").value = turmas[indice].nome;
    document.getElementById("professor").value = turmas[indice].professor;
    document.getElementById("quantidade").value = turmas[indice].quantidade;

    indiceEdicao = indice;

}

function excluirTurma(indice){

    turmas.splice(indice,1);

    listarTurmas();

}

listarTurmas();