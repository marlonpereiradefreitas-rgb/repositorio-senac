async function carregarCursos() {

    try {

        const resposta = await fetch('/cursos');

        const cursos = await resposta.json();
        
        const tabela = document.getElementById('tabelaCursos');

        tabela.innerHTML = '';

        cursos.forEach(curso => {

            const linha = document.createElement('tr');

            linha.innerHTML = `
                <td>${curso.id}</td>
                <td>${curso.nome}</td>
                <td>${curso.carga_horaria} horas</td>
                <td>R$ ${Number(curso.valor).toFixed(2)}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error('Erro:', erro);

    }
}
carregarCursos();