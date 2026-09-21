const formCurso = document.getElementById('formCurso');

formCurso.addEventListener('submit', async (event) => {

    event.preventDefault();

    const nome = document.getElementById('nome').value;

    const carga_horaria = document.getElementById('carga_horaria').value;

    const valor = document.getElementById('valor').value;

    try {

        const resposta = await fetch('/cursos', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                nome: nome,
                carga_horaria: carga_horaria,
                valor: valor
            })

        });

        const dados = await resposta.json();

        document.getElementById('mensagem').textContent = dados.mensagem;

        if (resposta.ok) {

            formCurso.reset();

        }

    } catch (erro) {

        console.error(erro);

        document.getElementById('mensagem').textContent = 'Erro ao cadastrar curso.';

    }
});