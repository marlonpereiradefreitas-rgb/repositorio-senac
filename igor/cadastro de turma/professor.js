let professores = [

    {
        nome: "Carlos Alberto",
        idade: 45,
        cpf: "111.111.111-11",
        disciplina: "Matemática"
    },

    {
        nome: "Fernanda Lima",
        idade: 38,
        cpf: "222.222.222-22",
        disciplina: "Português"
    },

    {
        nome: "Ricardo Souza",
        idade: 41,
        cpf: "333.333.333-33",
        disciplina: "História"
    }

];

let indiceEdicao = -1;

const formulario = document.getElementById("formProfessor");

formulario.addEventListener("submit", salvarProfessor);

function salvarProfessor(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const cpf = document.getElementById("cpf").value;
    const disciplina = document.getElementById("disciplina").value;

    const professor = {

        nome: nome,
        idade: idade,
        cpf: cpf,
        disciplina: disciplina

    };

    if(indiceEdicao === -1){

        professores.push(professor);

    }else{

        professores[indiceEdicao] = professor;
        indiceEdicao = -1;

    }

    formulario.reset();

    listarProfessores();

}

function listarProfessores(){

    const tabela = document.getElementById("tabelaProfessores");

    tabela.innerHTML = "";

    professores.forEach(function(professor, indice){

        tabela.innerHTML += `

        <tr>

            <td>${professor.nome}</td>
            <td>${professor.idade}</td>
            <td>${professor.cpf}</td>
            <td>${professor.disciplina}</td>

            <td>

                <button onclick="editarProfessor(${indice})">Editar</button>

                <button onclick="excluirProfessor(${indice})">Excluir</button>

            </td>

        </tr>

        `;

    });

}

function editarProfessor(indice){

    document.getElementById("nome").value = professores[indice].nome;
    document.getElementById("idade").value = professores[indice].idade;
    document.getElementById("cpf").value = professores[indice].cpf;
    document.getElementById("disciplina").value = professores[indice].disciplina;

    indiceEdicao = indice;

}

function excluirProfessor(indice){

    professores.splice(indice,1);

    listarProfessores();

}

listarProfessores();