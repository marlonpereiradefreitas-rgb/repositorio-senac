function mostrarLivros() {
    fetch("/livros")
    .then(resposta => resposta.json())
    .then(dados => {

        const tabela = document.getElementById("dadosLIvros");

        tabela.innerHTML = "";

        dados.forEach(livrvo => {

            tabela.innerHTML +=`
            <tr>
                <td>${livrvo.id}</td>
                <td>${livrvo.titulo}</td>
                <td>${livrvo.autor}</td>
                <td>${livrvo.ano}</td>
            </tr>
            `;
        })
    })

    .catch(erro => console.log(erro));

}

function mostrarLeitores() {
    fetch("https://localhost:3000/livros")
    .then(resposta => resposta.json())
    .then(dados => {

        const tabela = document.getElementById("dadosLeitores");

        tabela.innerHTML = "";

        dados.forEach(leitor => {

            tabela.innerHTML +=`
            <tr>
                <td>${leitor.id}</td>
                <td>${leitor.nome}</td>
                <td>${leitor.email}</td>
                <td>${leitor.telefone}</td>
            </tr>
            `;
        });
    })
    .catch(erro => console.log(erro));
}

function mostrarEmprestimos() {
    fetch("https://localhost:3000/livros")
    .then(resposta => resposta.json())
    .then(dados => {

        const tabela = document.getElementById("dadosEmprestimos");

        tabela.innerHTML = "";

        dados.forEach(emprestimo => {

            tabela.innerHTML +=`
            <tr>
                <td>${emprestimo.id}</td>
                <td>${emprestimo.livro_id}</td>
                <td>${emprestimo.leitor_id}</td>
                <td>${emprestimo.data_emprestimo}</td>
            </tr>
            `;
        });
    })
    .catch(erro => console.log(erro));
}