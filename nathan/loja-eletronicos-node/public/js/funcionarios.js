async function carregarFuncionarios() {

    try {

        const resposta =
            await fetch("/funcionarios");

        const funcionarios =
            await resposta.json();

        const tabela =
            document.querySelector(
                "#tabelaFuncionarios"
            );

        tabela.innerHTML = "";

        funcionarios.forEach(
            function (funcionario) {

                tabela.innerHTML += `

                    <tr>

                        <td>
                            ${funcionario.id}
                        </td>

                        <td>
                            ${funcionario.nome}
                        </td>

                        <td>
                            ${funcionario.email}
                        </td>

                        <td>
                            ${funcionario.cargo}
                        </td>

                        <td>

                            <button
                                onclick="
                                    excluirFuncionario(
                                        ${funcionario.id}
                                    )
                                "
                            >
                                Excluir
                            </button>

                        </td>

                    </tr>

                `;

            }
        );

    } catch (erro) {

        console.error(erro);

    }

}


async function excluirFuncionario(id) {

    const confirmar = confirm(
        "Tem certeza que deseja excluir este funcionário?"
    );

    if (!confirmar) {
        return;
    }

    try {

        const resposta =
            await fetch(
                `/funcionarios/${id}`,
                {
                    method: "DELETE"
                }
            );

        const dados =
            await resposta.json();

        alert(
            dados.mensagem || dados.erro
        );

        carregarFuncionarios();

    } catch (erro) {

        console.error(erro);

        alert(
            "Erro ao excluir funcionário."
        );

    }

}


carregarFuncionarios();