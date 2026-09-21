async function carregarProfessores() {

    try {

        const resposta = await fetch('/professores');

        const professores = await resposta.json();

        const tabela = document.getElementById('tabelaProfessores');

        tabela.innerHTML = '';

        professores.forEach(professor => {

            const linha = document.createElement('tr');

            linha.innerHTML = `
                <td>${professor.id}</td>
                <td>${professor.nome}</td>
                <td>${professor.especialidade}</td>
                <td>R$ ${Number(professor.salario).toFixed(2)}</td>
            `;

            tabela.appendChild(linha);

        });

    } catch (erro) {

        console.error('Erro:', erro);

    }
}

carregarProfessores();