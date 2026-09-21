const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const db = require("./db");

const app = express();

const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/usuarios", async (req, res) => {

    try {

        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {

            return res.status(400).json({
                mensagem: "Preencha todos os campos."
            });
        }

        const senhaCriptografada =
            await bcrypt.hash(senha, 10);

        const sql = `
            INSERT INTO usuarios
            (nome, email, senha)
            VALUES (?, ?, ?)
        `;

        db.query(
            sql,
            [nome, email, senhaCriptografada],
            (err, resultado) => {

                if (err) {

                    if (err.code === "ER_DUP_ENTRY") {

                        return res.status(400).json({
                            mensagem: "E-mail já cadastrado."
                        });
                    }

                    return res.status(500).json({
                        mensagem: "Erro ao cadastrar usuário."
                    });
                }

                res.status(201).json({
                    mensagem: "Usuário cadastrado!",
                    id: resultado.insertId
                });
            }
        );

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            mensagem: "Erro no servidor."
        });
    }
});

app.post("/login", (req, res) => {

    const { email, senha } = req.body;

    db.query(
        "SELECT * FROM usuarios WHERE email = ?",
        [email],
        async (err, resultados) => {

            if (err) {

                return res.status(500).json({
                    mensagem: "Erro no banco de dados."
                });
            }

            if (resultados.length === 0) {

                return res.status(401).json({
                    mensagem: "E-mail ou senha incorretos."
                });
            }

            const usuario = resultados[0];

            const senhaCorreta =
                await bcrypt.compare(
                    senha,
                    usuario.senha
                );

            if (!senhaCorreta) {

                return res.status(401).json({
                    mensagem: "E-mail ou senha incorretos."
                });
            }

            res.json({
                mensagem: "Login realizado!",
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email
                }
            });
        }
    );
});

app.post("/categorias", (req, res) => {

    const { nome, descricao } = req.body;

    const sql = `
        INSERT INTO categorias
        (nome, descricao)
        VALUES (?, ?)
    `;

    db.query(
        sql,
        [nome, descricao],
        (err, resultado) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    mensagem:
                        "Erro ao cadastrar categoria."
                });
            }

            res.status(201).json({
                mensagem:
                    "Categoria cadastrada!",
                id: resultado.insertId
            });
        }
    );
});

app.get("/categorias", (req, res) => {

    db.query(
        "SELECT * FROM categorias ORDER BY id DESC",
        (err, resultados) => {

            if (err) {

                return res.status(500).json({
                    mensagem:
                        "Erro ao buscar categorias."
                });
            }

            res.json(resultados);
        }
    );
});

app.post("/produtos", (req, res) => {

    const {
        nome,
        descricao,
        preco,
        estoque,
        categoria_id
    } = req.body;

    const sql = `
        INSERT INTO produtos
        (
            nome,
            descricao,
            preco,
            estoque,
            categoria_id
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            nome,
            descricao,
            preco,
            estoque,
            categoria_id
        ],
        (err, resultado) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    mensagem:
                        "Erro ao cadastrar produto."
                });
            }

            res.status(201).json({
                mensagem:
                    "Produto cadastrado!",
                id: resultado.insertId
            });
        }
    );
});

app.get("/produtos", (req, res) => {

    const sql = `
        SELECT
            produtos.id,
            produtos.nome,
            produtos.descricao,
            produtos.preco,
            produtos.estoque,
            categorias.nome AS categoria
        FROM produtos
        LEFT JOIN categorias
            ON produtos.categoria_id = categorias.id
        ORDER BY produtos.id DESC
    `;

    db.query(sql, (err, resultados) => {

        if (err) {

            console.error(err);

            return res.status(500).json({
                mensagem:
                    "Erro ao buscar produtos."
            });
        }

        res.json(resultados);
    });
});

app.post("/funcionarios", (req, res) => {

    const {
        nome,
        email,
        cargo,
        telefone
    } = req.body;

    const sql = `
        INSERT INTO funcionarios
        (nome, email, cargo, telefone)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nome, email, cargo, telefone],
        (err, resultado) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    mensagem:
                        "Erro ao cadastrar funcionário."
                });
            }

            res.status(201).json({
                mensagem:
                    "Funcionário cadastrado!",
                id: resultado.insertId
            });
        }
    );
});

app.get("/funcionarios", (req, res) => {

    db.query(
        "SELECT * FROM funcionarios ORDER BY id DESC",
        (err, resultados) => {

            if (err) {

                return res.status(500).json({
                    mensagem:
                        "Erro ao buscar funcionários."
                });
            }

            res.json(resultados);
        }
    );
});

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "public", "login.html")
    );
});

app.listen(PORT, () => {

    console.log(
        `Loja de eletrônicos rodando em http://localhost:${PORT}`
    );
});