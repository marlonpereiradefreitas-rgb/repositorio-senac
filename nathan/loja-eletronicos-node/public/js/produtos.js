async function carregarProdutos() {

    try {

        const resposta =
            await fetch("/produtos");

        const produtos =
            await resposta.json();

        const tabela =
            document.querySelector(
                "#tabelaProdutos"
            );

        tabela.innerHTML = "";

        produtos.forEach(function (produto) {

            tabela.innerHTML += `

                <tr>

                    <td>${produto.id}</td>

                    <td>${produto.nome}</td>

                    <td>
                        R$ ${Number(
                            produto.preco
                        ).toFixed(2)}
                    </td>

                    <td>
                        ${produto.estoque}
                    </td>

                    <td>
                        ${produto.categoria || "Sem categoria"}
                    </td>

                    <td>

                        <button
                            onclick="
                                excluirProduto(
                                    ${produto.id}
                                )
                            "
                        >
                            Excluir
                        </button>

                    </td>

                </tr>

            `;

        });

    } catch (erro) {

        console.error(erro);

    }

}


async function excluirProduto(id) {

    const confirmar = confirm(
        "Tem certeza que deseja excluir este produto?"
    );

    if (!confirmar) {
        return;
    }

    try {

        const resposta =
            await fetch(
                `/produtos/${id}`,
                {
                    method: "DELETE"
                }
            );

        const dados =
            await resposta.json();

        alert(
            dados.mensagem || dados.erro
        );

        carregarProdutos();

    } catch (erro) {

        console.error(erro);

        alert(
            "Erro ao excluir produto."
        );

    }

}


carregarProdutos();