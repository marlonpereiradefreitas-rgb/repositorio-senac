const form = document.getElementById("formLogin");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    try {

        const resposta = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                senha
            })
        });

        const dados = await resposta.json();

        if (resposta.ok) {

            mensagem.textContent = "Login realizado com sucesso!";

            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);

        } else {

            mensagem.textContent =
                dados.mensagem || "E-mail ou senha incorretos.";

        }

    } catch (erro) {

        mensagem.textContent =
            "Erro ao conectar com o servidor.";

        console.error(erro);
    }
});