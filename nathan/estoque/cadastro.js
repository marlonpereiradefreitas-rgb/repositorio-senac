const formulario = document.getElementById("formProduto");

formulario.addEventListener("submit", cadastrarProduto);

function cadastrarProduto(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);


    if(nome === "" || isNaN(preco) || isNaN(quantidade)){
        alert("Preencha todos os campos.");
        return;
    }

    if(preco <= 0){
        alert("O preço deve ser maior que zero.");
        return;
    }

    if(quantidade <= 0){
        alert("A quantidade deve ser maior que zero.");
        return;
    }


    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];


    const existe = produtos.some(produto =>
        produto.nome.toLowerCase() === nome.toLowerCase()
    );

    if(existe){
        alert("Já existe um produto com esse nome.");
        return;
    }


    const novoProduto = {

        nome: nome,
        preco: preco,
        quantidade: quantidade

    };

    produtos.push(novoProduto);


    localStorage.setItem("produtos", JSON.stringify(produtos));

    alert("Produto cadastrado com sucesso!");


    formulario.reset();

}