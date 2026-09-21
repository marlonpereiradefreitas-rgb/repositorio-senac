const express = require("express");
const db = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { nome, cargo, salario } = req.body;
        if (!nome || !cargo || salario === undefined) {
            return res.status(400).json({ mensagem: "Preencha todos os campos." });
        }

        await db.execute(
            "INSERT INTO funcionarios (nome, cargo, salario) VALUES (?, ?, ?)",
            [nome, cargo, salario]
        );

        res.status(201).json({ mensagem: "Funcionário cadastrado com sucesso!" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao cadastrar funcionário." });
    }
});

router.get("/", async (req, res) => {
    try {
        const [funcionarios] = await db.execute(
            "SELECT * FROM funcionarios ORDER BY id DESC"
        );
        res.json(funcionarios);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao buscar funcionários." });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const [resultado] = await db.execute(
            "DELETE FROM funcionarios WHERE id = ?",
            [req.params.id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ mensagem: "Funcionário não encontrado." });
        }

        res.json({ mensagem: "Funcionário excluído com sucesso!" });
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao excluir funcionário." });
    }
});

module.exports = router;