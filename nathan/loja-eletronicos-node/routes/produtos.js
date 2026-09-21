const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { nome, preco, quantidade } = req.body;
        if (!nome || preco === undefined || quantidade === undefined) {
            return res.status(400).json({ mensagem: "Preencha todos os campos." });
        }

        await db.execute(
            "INSERT INTO produtos (nome, preco, quantidade) VALUES (?, ?, ?)",
            [nome, preco, quantidade]
        );

        res.status(201).json({ mensagem: "Produto cadastrado com sucesso!" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao cadastrar produto." });
    }
});

router.get("/", async (req, res) => {
    try {
        const [produtos] = await db.execute("SELECT * FROM produtos ORDER BY id DESC");
        res.json(produtos);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao buscar produtos." });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const [resultado] = await db.execute(
            "DELETE FROM produtos WHERE id = ?",
            [req.params.id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Produto não encontrado." });
        }

        res.json({ mensagem: "Produto excluído com sucesso!" });
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao excluir produto." });
    }
});

module.exports = router;