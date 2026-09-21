const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db");

const router = express.Router();

router.post("/cadastro", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ mensagem: "Preencha todos os campos." });
        }

        const [existente] = await db.execute(
            "SELECT id FROM usuarios WHERE email = ?",
            [email]
        );

        if (existente.length > 0) {
            return res.status(409).json({ mensagem: "Este email já está cadastrado." });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        await db.execute(
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
            [nome, email, senhaCriptografada]
        );

        res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao cadastrar usuário." });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;

        const [usuarios] = await db.execute(
            "SELECT * FROM usuarios WHERE email = ?",
            [email]
        );

        if (usuarios.length === 0) {
            return res.status(401).json({ mensagem: "Email ou senha incorretos." });
        }

        const usuario = usuarios[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: "Email ou senha incorretos." });
        }

        req.session.usuario = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        };

        res.json({ mensagem: "Login realizado com sucesso!", redirecionar: "/home.html" });
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ mensagem: "Erro ao realizar login." });
    }
});

module.exports = router;