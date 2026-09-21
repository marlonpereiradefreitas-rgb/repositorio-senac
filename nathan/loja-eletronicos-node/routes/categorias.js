const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { nome, descricao } = req.body;
        if (!nome) {
            return res.status(400).json({ mensagem: "Informe o nome da categoria." });
        }

        await db.execute(
            "INSERT INTO categorias (nome, descricao) VALUES (?, ?)",
            [nome, descricao || ""]
        );

        res.status(201).json({ mensagem: "Categoria cadastrada com sucesso!" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao cadastrar categoria." });
    }
});

router.get("/", async (req, res) => {
    try {
        const [categorias] = await db.execute("SELECT * FROM categorias ORDER BY id DESC");
        res.json(categorias);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao buscar categorias." });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const [resultado] = await db.execute(
            "DELETE FROM categorias WHERE id = ?",
            [req.params.id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Categoria não encontrada." });
        }

        res.json({ mensagem: "Categoria excluída com sucesso!" });
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao excluir categoria." });
    }
});

module.exports = router;