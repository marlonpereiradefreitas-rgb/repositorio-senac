const form =
    document.querySelector("#formUsuario");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome =
        document.querySelector("#nome").value;

    const email =
        document.querySelector("#email").value;

    const senha =
        document.querySelector("#senha").value;

    try {

        const resposta = await fetch(
            "/usuarios",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    senha: senha
                })
            }
        );

        const dados = await resposta.json();

        document.querySelector("#mensagem")
            .textContent =
            dados.mensagem || dados.erro;

        if (resposta.ok) {

            form.reset();

        }

    } catch (erro) {

        console.error(erro);

        document.querySelector("#mensagem")
            .textContent =
            "Erro ao cadastrar usuário.";

    }

});