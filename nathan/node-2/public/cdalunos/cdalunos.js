const formAluno = document.getElementById('formAluno');

formAluno.addEventListener('submit', async (event) => {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;

    try {

        const resposta = await fetch('/alunos', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                nome: nome,
                idade: idade,
                telefone: telefone
            })

        });

        const dados = await resposta.json();

        document.getElementById('mensagem').textContent =
            dados.mensagem;

        if (resposta.ok) {

            formAluno.reset();

        }

    } catch (erro) {

        console.error(erro);

        document.getElementById('mensagem').textContent =
            'Erro ao cadastrar aluno.';

    }
});