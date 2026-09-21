const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', async (event) => {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {

        const resposta = await fetch('/usuarios/cadastro', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha
            })

        });

        const dados = await resposta.json();

        document.getElementById('mensagem').textContent =
            dados.mensagem;

        if (resposta.ok) {

            formCadastro.reset();

        }

    } catch (erro) {

        console.error(erro);

        document.getElementById('mensagem').textContent =
            'Erro ao conectar com o servidor.';

    }
});