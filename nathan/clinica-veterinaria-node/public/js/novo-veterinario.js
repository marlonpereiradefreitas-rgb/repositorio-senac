const form =
    document.getElementById("formVeterinario");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const crmv =
        document.getElementById("crmv").value;

    const especialidade =
        document.getElementById("especialidade").value;

    const mensagem =
        document.getElementById("mensagem");

    try {

        const resposta =
            await fetch("/veterinarios", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nome,
                    crmv,
                    especialidade
                })
            });

        const dados =
            await resposta.json();

        if (resposta.ok) {

            mensagem.textContent =
                "Veterinário cadastrado com sucesso!";

            form.reset();

        } else {

            mensagem.textContent =
                dados.mensagem ||
                "Erro ao cadastrar veterinário.";
        }

    } catch (erro) {

        mensagem.textContent =
            "Erro ao conectar com o servidor.";

        console.error(erro);
    }
});