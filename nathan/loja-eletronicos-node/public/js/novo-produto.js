const form =
    document.querySelector("#formProduto");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome =
        document.querySelector("#nome").value;

    const preco =
        document.querySelector("#preco").value;

    const estoque =
        document.querySelector("#estoque").value;

    const categoria_id =
        document.querySelector("#categoria_id").value;

    try {

        const resposta = await fetch(
            "/produtos",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nome: nome,
                    preco: preco,
                    estoque: estoque,
                    categoria_id: categoria_id
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
            "Erro ao cadastrar produto.";

    }

});