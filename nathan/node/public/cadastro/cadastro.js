const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {

        const resposta = await fetch("/cadastro", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha
            })

        });

        const dados = await resposta.json();

        const mensagem = document.getElementById("mensagem");

        mensagem.textContent = dados.mensagem;

        if (dados.sucesso) {

            formulario.reset();

            setTimeout(() => {

                window.location.href = "/login/login.html";

            }, 1000);

        }

    } catch (erro) {

        console.error(erro);

        document.getElementById("mensagem").textContent =
            "Erro ao conectar com o servidor.";

    }

});