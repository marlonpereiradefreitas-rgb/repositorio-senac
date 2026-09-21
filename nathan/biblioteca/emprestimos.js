const form = document.getElementById("formEmprestimo");
const selectLeitor = document.getElementById("leitor");
const selectLivro = document.getElementById("livro");

carregarDados();

function carregarDados(){
    let leitores = JSON.parse(localStorage.getItem("leitores")) || [];
    let livros = JSON.parse(localStorage.getItem("livros")) || [];

    leitores.forEach(leitor => {
        selectLeitor.innerHTML += `
            <option value="${leitor.cpf}">
                ${leitor.nome}
            </option>
        `;
    });

    livros.forEach((livro, indice) => {
        if(livro.quantidade > 0){
            selectLivro.innerHTML += `
                <option value="${indice}">
                    ${livro.titulo} - ${livro.autor}
                </option>
            `;
        }
    });

}

form.addEventListener("submit", registrarEmprestimo);

function registrarEmprestimo(event){

    event.preventDefault();

    const cpf = selectLeitor.value;
    const indiceLivro = selectLivro.value;
    const dataEmprestimo = document.getElementById("dataEmprestimo").value;
    const dataDevolucao = document.getElementById("dataDevolucao").value;

    if(cpf == "" || indiceLivro == "" || dataEmprestimo == "" || dataDevolucao == ""){
        alert("Preencha todos os campos.");
        return;
    }

    let leitores = JSON.parse(localStorage.getItem("leitores")) || [];
    let livros = JSON.parse(localStorage.getItem("livros")) || [];
    let emprestimos = JSON.parse(localStorage.getItem("emprestimos")) || [];

    if(livros[indiceLivro].quantidade <= 0){
        alert("Livro sem exemplares disponíveis.");
        return;
    }

    const leitor = leitores.find(l => l.cpf == cpf);

    const emprestimo = {
        leitor: leitor.nome,
        livro: livros[indiceLivro].titulo,
        dataEmprestimo,
        dataDevolucao
    };

    emprestimos.push(emprestimo);

    livros[indiceLivro].quantidade--;

    localStorage.setItem("emprestimos", JSON.stringify(emprestimos));
    localStorage.setItem("livros", JSON.stringify(livros));

    alert("Empréstimo registrado com sucesso!");
    form.reset();

    selectLivro.innerHTML = '<option value="">Selecione um livro</option>';
    carregarDados();
}
