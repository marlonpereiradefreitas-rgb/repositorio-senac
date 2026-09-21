async function carregarCategorias() {

    try {

        const resposta =
            await fetch("/categorias");

        const categorias =
            await resposta.json();

        const tabela =
            document.querySelector(
                "#tabelaCategorias"
            );

        tabela.innerHTML = "";

        categorias.forEach(function (categoria) {

            tabela.innerHTML += `

                <tr>

                    <td>
                        ${categoria.id}
                    </td>

                    <td>
                        ${categoria.nome}
                    </td>

                    <td>

                        <button
                            onclick="
                                excluirCategoria(
                                    ${categoria.id}
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


async function excluirCategoria(id) {

    const confirmar = confirm(
        "Tem certeza que deseja excluir esta categoria?"
    );

    if (!confirmar) {
        return;
    }

    try {

        const resposta =
            await fetch(
                `/categorias/${id}`,
                {
                    method: "DELETE"
                }
            );

        const dados =
            await resposta.json();

        alert(
            dados.mensagem || dados.erro
        );

        carregarCategorias();

    } catch (erro) {

        console.error(erro);

        alert(
            "Erro ao excluir categoria."
        );

    }

}


carregarCategorias();