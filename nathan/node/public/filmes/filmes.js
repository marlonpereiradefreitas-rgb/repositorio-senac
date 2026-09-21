async function carregarFilmes() {

    try {

        const resposta = await fetch("/api/filmes");

        const filmes = await resposta.json();

        const tabela = document.getElementById("tabelaFilmes");

        tabela.innerHTML = "";

        filmes.forEach(filme => {

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${filme.id}</td>
                <td>${filme.titulo}</td>
                <td>${filme.genero}</td>
                <td>${filme.ano}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error("Erro ao carregar filmes:", erro);

    }

}

carregarFilmes();