async function carregarConsultas() {

    const lista =
        document.getElementById(
            "listaConsultas"
        );

    try {

        const resposta =
            await fetch("/consultas");

        const consultas =
            await resposta.json();

        lista.innerHTML = "";

        consultas.forEach(consulta => {

            const linha =
                document.createElement("tr");

            linha.innerHTML = `
                <td>${consulta.id}</td>
                <td>${consulta.animal}</td>
                <td>${consulta.veterinario}</td>
                <td>${consulta.data}</td>
                <td>${consulta.hora}</td>
                <td>${consulta.motivo}</td>
            `;

            lista.appendChild(linha);
        });

    } catch (erro) {

        console.error(
            "Erro ao carregar consultas:",
            erro
        );
    }
}

carregarConsultas();