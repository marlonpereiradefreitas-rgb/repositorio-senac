const barra = document.getElementById("barra");

function mostrarEtapa(numero) {

    const etapas = document.querySelectorAll(".etapa");

    etapas.forEach(etapa => {
        etapa.style.display = "none";
    });

    if(numero == 1){
        document.getElementById("etapa1").style.display = "block";
        barra.style.width = "25%";
    }

    if(numero == 2){
        document.getElementById("etapa2").style.display = "block";
        barra.style.width = "50%";
    }

    if(numero == 3){
        document.getElementById("etapa3").style.display = "block";
        barra.style.width = "75%";
    }

    if(numero == 4){
        document.getElementById("resumo").style.display = "block";
        barra.style.width = "100%";
    }

}

mostrarEtapa(1);

function proximaEtapa(etapa){

    if(etapa == 2){

        const burger =
        document.querySelector('input[name="hamburguer"]:checked');

        if(!burger){
            alert("Escolha um hambúrguer.");
            return;
        }

    }

    if(etapa == 3){

        const bebida =
        document.querySelector('input[name="bebida"]:checked');

        if(!bebida){
            alert("Escolha uma bebida.");
            return;
        }

    }

    mostrarEtapa(etapa);

}

function voltarEtapa(etapa){

    mostrarEtapa(etapa);

}

function finalizarPedido(){

    const burger =
    document.querySelector('input[name="hamburguer"]:checked');

    const bebida =
    document.querySelector('input[name="bebida"]:checked');

    const adicionais =
    document.querySelectorAll('input[type="checkbox"]:checked');

    let total = 0;

    total += parseFloat(burger.dataset.preco);

    total += parseFloat(bebida.dataset.preco);

    let listaAdicionais = "";

    adicionais.forEach(item=>{

        listaAdicionais += item.value + "<br>";

        total += parseFloat(item.dataset.preco);

    });

    const obs =
    document.getElementById("observacao").value;

    document.getElementById("resHamburguer").innerHTML =
    "🍔 Hambúrguer: " + burger.value;

    document.getElementById("resBebida").innerHTML =
    "🥤 Bebida: " + bebida.value;

    document.getElementById("resAdicionais").innerHTML =
    "<b>Adicionais:</b><br>" + listaAdicionais;

    document.getElementById("resObs").innerHTML =
    "<b>Observações:</b><br>" + obs;

    document.getElementById("valorTotal").innerHTML =
    "Total: R$ " + total.toFixed(2);


    let imagem = "";

    switch(burger.value){

        case "X-Burger":
            imagem = "img/xburger.jpg";
            break;

        case "X-Salada":
            imagem = "img/xsalada.jpg";
            break;

        case "Bacon Burger":
            imagem = "img/bacon.jpg";
            break;

        case "Chicken Burger":
            imagem = "img/chicken.jpg";
            break;

    }

    document.getElementById("imagemResumo").src = imagem;

    mostrarEtapa(4);

}

function novoPedido(){

    location.reload();

}


const radios =
document.querySelectorAll('input[type="radio"]');

radios.forEach(radio=>{

    radio.addEventListener("change",()=>{

        document.querySelectorAll(".card").forEach(card=>{

            card.classList.remove("selecionado");

        });

        radio.parentElement.classList.add("selecionado");

    });

});



const checks =
document.querySelectorAll('input[type="checkbox"]');

checks.forEach(check=>{

    check.addEventListener("change",()=>{

        if(check.checked){

            check.parentElement.classList.add("selecionado");

        }else{

            check.parentElement.classList.remove("selecionado");

        }

    });

});