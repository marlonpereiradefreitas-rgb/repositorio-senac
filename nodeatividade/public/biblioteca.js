fetch("/livros")
.then(resposta => resposta.json())
.then(dados => {

    let tabela = document.getElementById("tabela");

    dados.forEach(livro => {

        tabela.innerHTML += `
            <tr>
                <td>${livro.id}</td>
                <td>${livro.titulo}</td>
                <td>${livro.ano}</td>
                <td>${livro.autor}</td>
                <td>${livro.editora}</td>
            </tr>
        `;

    });

})
.catch(erro => {
    console.log(erro);
});