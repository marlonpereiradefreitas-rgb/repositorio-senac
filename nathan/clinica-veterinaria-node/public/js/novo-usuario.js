const form = document.getElementById("formCadastro");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const email =
        document.getElementById("email").value;

    const senha =
        document.getElementById("senha").value;

    const mensagem =
        document.getElementById("mensagem");

    try {

        const resposta = await fetch("/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                email,
                senha
            })
        });

        const dados = await resposta.json();

        if (resposta.ok) {

            mensagem.textContent =
                "Usuário cadastrado com sucesso!";

            form.reset();

        } else {

            mensagem.textContent =
                dados.mensagem ||
                "Erro ao cadastrar usuário.";
        }

    } catch (erro) {

        mensagem.textContent =
            "Erro ao conectar com o servidor.";

        console.error(erro);
    }
});