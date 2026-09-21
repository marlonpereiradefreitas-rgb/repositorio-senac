const formulario = document.getElementById("formLeitor");

formulario.addEventListener("submit", cadastrarLeitor);

function cadastrarLeitor(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const telefone = document.getElementById("telefone").value.trim();

    if(nome === "" || cpf === "" || telefone === ""){
        alert("Preencha todos os campos.");
        return;
    }

    let leitores = JSON.parse(localStorage.getItem("leitores")) || [];
    let cpfExiste = leitores.some(leitor => leitor.cpf === cpf);

    if(cpfExiste){
        alert("Já existe um leitor cadastrado com esse CPF.");
        return;
    }

    const leitor = {
        nome,
        cpf,
        telefone
    };

    leitores.push(leitor);

    localStorage.setItem("leitores", JSON.stringify(leitores));

    alert("Leitor cadastrado com sucesso!");

    formulario.reset();

}