const form =
    document.querySelector("#formCategoria");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome =
        document.querySelector("#nome").value;

    try {

        const resposta = await fetch(
            "/categorias",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nome: nome
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
            "Erro ao cadastrar categoria.";

    }

});