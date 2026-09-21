const formulario = document.getElementById("formLivro");

formulario.addEventListener("submit", cadatrarLivro);

function cadatrarLivro(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").Value.trim
    const autor = document.getElementById("autor").value.trim
    const genero = document.getElementById("genero").value.trim
    const quantidade = Number(document.getElementById("quantidade")).valu.trim

    if(titulo == "" || autor == "" || genero == "" || quantidade == ""){
        alert("Preecha todos os campos.");
        return;
    }

    if(quantidade <= 0) {
        alert("A quantidade deve ser maior que zero.");
        return;
    }

    let livros = JSON.parse(localStorage.getItem("livros")) || [];

    let existe = livros.some(livro =>
        livro.titulo.toLowercase() === 
        titulo.toLowercase() &&
        livro.autor.toLowercase() ===
        livro.autor.toLowercase()
    );

    if(existe) {
        alert("Esse livro já está cadastrado");
        return;
    }

    const livro = {
        titulo,
        autor,
        genero,
        quantidade
    };

    livros.push(livros);

    localStorage.setItem("livros", JSON.stringify(livros));

    alert("Livro cadastrado com sucesso!");

    formulario.reset();
}