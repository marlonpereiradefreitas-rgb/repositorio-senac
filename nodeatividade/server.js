const express = require("express");
const conexao = require("./db");
const path = require("path");

const app = express();

// Permite acessar arquivos da pasta public
app.use(express.static(path.join(__dirname, "public")));

app.get("/livros", (req, res) => {
    
    conexao.query(`SELECT livros.id,livros.titulo,
            livros.ano,
            autores.nome AS autor,
            editoras.nome AS editora
        FROM livros
        INNER JOIN autores
            ON livros.autor_id = autores.id
        INNER JOIN editoras
            ON livros.editora_id = editoras.id`, (erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.json(resultado);

    });

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/biblioteca.html");
});

