const form = document.querySelector("#formLogin");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email =
        document.querySelector("#email").value;

    const senha =
        document.querySelector("#senha").value;

    try {

        const resposta = await fetch(
            "/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
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

            window.location.href = "home.html";

        }

    } catch (erro) {

        console.error(erro);

        document.querySelector("#mensagem")
            .textContent =
            "Erro ao conectar com o servidor.";

    }

});