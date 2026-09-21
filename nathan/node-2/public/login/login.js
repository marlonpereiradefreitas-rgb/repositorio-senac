const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', async (event) => {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {

        const resposta = await fetch('/usuarios/login', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: email,
                senha: senha
            })
        });

        const dados = await resposta.json();

        document.getElementById('mensagem').textContent = dados.mensagem;

        if (resposta.ok) {

            window.location.href = 'home.html';

        }

    } catch (erro) {

        console.error(erro);

        document.getElementById('mensagem').textContent =
            'Erro ao conectar com o servidor.';

    }
});