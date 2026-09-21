const form = document.getElementById("formAnimal");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value;

    const especie =
        document.getElementById("especie").value;

    const raca =
        document.getElementById("raca").value;

    const idade =
        document.getElementById("idade").value;

    const dono =
        document.getElementById("dono").value;

    const mensagem =
        document.getElementById("mensagem");

    try {

        const resposta = await fetch("/animais", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                especie,
                raca,
                idade,
                dono
            })
        });

        const dados = await resposta.json();

        if (resposta.ok) {

            mensagem.textContent =
                "Animal cadastrado com sucesso!";

            form.reset();

        } else {

            mensagem.textContent =
                dados.mensagem ||
                "Erro ao cadastrar animal.";
        }

    } catch (erro) {

        mensagem.textContent =
            "Erro ao conectar com o servidor.";

        console.error(erro);
    }
});