const form =
    document.getElementById("formConsulta");

const animalSelect =
    document.getElementById("animal_id");

const veterinarioSelect =
    document.getElementById("veterinario_id");


async function carregarAnimais() {

    try {

        const resposta =
            await fetch("/animais");

        const animais =
            await resposta.json();

        animais.forEach(animal => {

            const option =
                document.createElement("option");

            option.value = animal.id;

            option.textContent =
                animal.nome;

            animalSelect.appendChild(option);
        });

    } catch (erro) {

        console.error(
            "Erro ao carregar animais:",
            erro
        );
    }
}


async function carregarVeterinarios() {

    try {

        const resposta =
            await fetch("/veterinarios");

        const veterinarios =
            await resposta.json();

        veterinarios.forEach(veterinario => {

            const option =
                document.createElement("option");

            option.value =
                veterinario.id;

            option.textContent =
                veterinario.nome;

            veterinarioSelect.appendChild(option);
        });

    } catch (erro) {

        console.error(
            "Erro ao carregar veterinários:",
            erro
        );
    }
}


form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        const animal_id =
            animalSelect.value;

        const veterinario_id =
            veterinarioSelect.value;

        const data =
            document.getElementById("data").value;

        const hora =
            document.getElementById("hora").value;

        const motivo =
            document.getElementById("motivo").value;

        const mensagem =
            document.getElementById("mensagem");

        try {

            const resposta =
                await fetch("/consultas", {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        animal_id,
                        veterinario_id,
                        data,
                        hora,
                        motivo
                    })
                });

            const dados =
                await resposta.json();

            if (resposta.ok) {

                mensagem.textContent =
                    "Consulta cadastrada com sucesso!";

                form.reset();

            } else {

                mensagem.textContent =
                    dados.mensagem ||
                    "Erro ao cadastrar consulta.";
            }

        } catch (erro) {

            mensagem.textContent =
                "Erro ao conectar com o servidor.";

            console.error(erro);
        }
    }
);


carregarAnimais();
carregarVeterinarios();