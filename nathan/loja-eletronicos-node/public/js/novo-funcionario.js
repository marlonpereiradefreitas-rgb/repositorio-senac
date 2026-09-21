const form =
    document.querySelector("#formFuncionario");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome =
        document.querySelector("#nome").value;

    const email =
        document.querySelector("#email").value;

    const cargo =
        document.querySelector("#cargo").value;

    try {

        const resposta = await fetch(
            "/funcionarios",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    cargo: cargo
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
            "Erro ao cadastrar funcionário.";

    }

});