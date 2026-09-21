async function carregarAnimais() {

    const lista =
        document.getElementById("listaAnimais");

    try {

        const resposta =
            await fetch("/animais");

        const animais =
            await resposta.json();

        lista.innerHTML = "";

        animais.forEach(animal => {

            const linha =
                document.createElement("tr");

            linha.innerHTML = `
                <td>${animal.id}</td>
                <td>${animal.nome}</td>
                <td>${animal.especie}</td>
                <td>${animal.raca}</td>
                <td>${animal.idade}</td>
                <td>${animal.dono}</td>
            `;

            lista.appendChild(linha);
        });

    } catch (erro) {

        console.error(
            "Erro ao carregar animais:",
            erro
        );
    }
}

carregarAnimais();