const tabela = document.getElementById("tabelaProdutos");

window.onload = carregarProdutos;

function carregarProdutos() {

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    tabela.innerHTML = "";

    if (produtos.length === 0) {

        tabela.innerHTML = `
            <tr>
                <td colspan="4">Nenhum produto cadastrado.</td>
            </tr>
        `;

        return;
    }

    produtos.forEach((produto, indice) => {

        tabela.innerHTML += `

            <tr>

                <td>${produto.nome}</td>

                <td>R$ ${produto.preco.toFixed(2)}</td>

                <td>${produto.quantidade}</td>

                <td>

                    <button
                        class="btnExcluir"
                        onclick="excluirProduto(${indice})">

                        Excluir

                    </button>

                </td>

            </tr>

        `;

    });

}

function excluirProduto(indice){

    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

    if(confirm("Deseja realmente excluir este produto?")){

        produtos.splice(indice,1);

        localStorage.setItem("produtos", JSON.stringify(produtos));

        carregarProdutos();

    }

}