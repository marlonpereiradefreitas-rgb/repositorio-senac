let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

mostrarTarefas();

function salvar(){

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

}

function adicionarTarefa(){

    const input = document.getElementById("tarefa");

    const texto = input.value.trim();

    if(texto === ""){

        alert("Digite uma tarefa.");

        return;
    }

    tarefas.push({

        texto:texto,

        concluida:false

    });

    input.value="";

    salvar();

    mostrarTarefas();

}

function mostrarTarefas(){

    const lista = document.getElementById("lista");

    lista.innerHTML="";

    tarefas.forEach((tarefa,index)=>{

        const li=document.createElement("li");

        const span=document.createElement("span");

        span.className="texto";

        span.innerText=tarefa.texto;

        if(tarefa.concluida){

            span.classList.add("concluida");

        }

        span.onclick=function(){

            tarefas[index].concluida=!tarefas[index].concluida;

            salvar();

            mostrarTarefas();

        }

        const botao=document.createElement("button");

        botao.innerText="Excluir";

        botao.className="excluir";

        botao.onclick=function(){

            tarefas.splice(index,1);

            salvar();

            mostrarTarefas();

        }

        li.appendChild(span);

        li.appendChild(botao);

        lista.appendChild(li);

    });

}