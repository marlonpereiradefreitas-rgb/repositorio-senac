async function carregarProdutos() {

    try {

        const resposta = await fetch("/api/produtos");

        const produtos = await resposta.json();

        const tabela = document.getElementById("tabelaProdutos");

        tabela.innerHTML = "";

        produtos.forEach(produto => {

            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.categoria}</td>
                <td>R$ ${Number(produto.preco).toFixed(2)}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error("Erro ao carregar produtos:", erro);

    }

}

carregarProdutos();