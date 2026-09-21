const formProfessor = document.getElementById('formProfessor');

formProfessor.addEventListener('submit', async (event) => {

    event.preventDefault();

    const nome = document.getElementById('nome').value;

    const especialidade = document.getElementById('especialidade').value;

    const salario = document.getElementById('salario').value;

    try {

        const resposta = await fetch('/professores', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                nome: nome,
                especialidade: especialidade,
                salario: salario
            })

        });

        const dados = await resposta.json();

        document.getElementById('mensagem').textContent = dados.mensagem;

        if (resposta.ok) {

            formProfessor.reset();

        }

    } catch (erro) {

        console.error(erro);

        document.getElementById('mensagem').textContent =
            'Erro ao cadastrar professor.';

    }
});