async function carregarLivros() {

    try {

        const resposta = await fetch("/api/livros");

        const livros = await resposta.json();

        const tabela = document.getElementById("tabelaLivros");

        tabela.innerHTML = "";

        livros.forEach(livro => {

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${livro.id}</td>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.ano}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error("Erro ao carregar livros:", erro);

    }

}

carregarLivros();