async function carregarVeterinarios() {

    const lista =
        document.getElementById(
            "listaVeterinarios"
        );

    try {

        const resposta =
            await fetch("/veterinarios");

        const veterinarios =
            await resposta.json();

        lista.innerHTML = "";

        veterinarios.forEach(veterinario => {

            const linha =
                document.createElement("tr");

            linha.innerHTML = `
                <td>${veterinario.id}</td>
                <td>${veterinario.nome}</td>
                <td>${veterinario.crmv}</td>
                <td>${veterinario.especialidade}</td>
            `;

            lista.appendChild(linha);
        });

    } catch (erro) {

        console.error(
            "Erro ao carregar veterinários:",
            erro
        );
    }
}

carregarVeterinarios();