const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const db = require("./db");

const app = express();


// ==========================================
// CONFIGURAÇÕES
// ==========================================

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Permite acessar os arquivos da pasta public
app.use(express.static(
    path.join(__dirname, "public")
));


// ==========================================
// PÁGINA INICIAL
// ==========================================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );

});


// ==========================================
// CADASTRO
// ==========================================

app.post("/cadastro", async (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {

        return res.json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });

    }

    try {

        db.query(
            "SELECT * FROM usuarios WHERE email = ?",
            [email],
            async (erro, resultados) => {

                if (erro) {

                    console.error(erro);

                    return res.status(500).json({
                        sucesso: false,
                        mensagem: "Erro no banco de dados."
                    });

                }

                if (resultados.length > 0) {

                    return res.json({
                        sucesso: false,
                        mensagem: "Este email já está cadastrado."
                    });

                }

                const senhaCriptografada =
                    await bcrypt.hash(senha, 10);

                db.query(
                    `INSERT INTO usuarios
                    (nome, email, senha)
                    VALUES (?, ?, ?)`,
                    [
                        nome,
                        email,
                        senhaCriptografada
                    ],
                    (erro) => {

                        if (erro) {

                            console.error(erro);

                            return res.status(500).json({
                                sucesso: false,
                                mensagem: "Erro ao cadastrar."
                            });

                        }

                        res.json({
                            sucesso: true,
                            mensagem: "Cadastro realizado com sucesso!"
                        });

                    }
                );

            }
        );

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro interno do servidor."
        });

    }

});


// ==========================================
// LOGIN
// ==========================================

app.post("/login", (req, res) => {

    const { email, senha } = req.body;

    if (!email || !senha) {

        return res.json({
            sucesso: false,
            mensagem: "Preencha email e senha."
        });

    }

    db.query(
        "SELECT * FROM usuarios WHERE email = ?",
        [email],
        async (erro, resultados) => {

            if (erro) {

                console.error(erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro no banco de dados."
                });

            }

            if (resultados.length === 0) {

                return res.json({
                    sucesso: false,
                    mensagem: "Email ou senha incorretos."
                });

            }

            const usuario = resultados[0];

            const senhaCorreta =
                await bcrypt.compare(
                    senha,
                    usuario.senha
                );

            if (!senhaCorreta) {

                return res.json({
                    sucesso: false,
                    mensagem: "Email ou senha incorretos."
                });

            }

            res.json({
                sucesso: true,
                mensagem: "Login realizado com sucesso!"
            });

        }
    );

});


// ==========================================
// PRODUTOS
// ==========================================

app.get("/api/produtos", (req, res) => {

    db.query(
        "SELECT * FROM produtos",
        (erro, resultados) => {

            if (erro) {

                console.error("Erro nos produtos:", erro);

                return res.status(500).json({
                    erro: "Erro ao buscar produtos"
                });

            }

            res.json(resultados);

        }
    );

});


// ==========================================
// LIVROS
// ==========================================

app.get("/api/livros", (req, res) => {

    db.query(
        "SELECT * FROM livros",
        (erro, resultados) => {

            if (erro) {

                console.error("Erro nos livros:", erro);

                return res.status(500).json({
                    erro: "Erro ao buscar livros"
                });

            }

            res.json(resultados);

        }
    );

});


// ==========================================
// FILMES
// ==========================================

app.get("/api/filmes", (req, res) => {

    db.query(
        "SELECT * FROM filmes",
        (erro, resultados) => {

            if (erro) {

                console.error("Erro nos filmes:", erro);

                return res.status(500).json({
                    erro: "Erro ao buscar filmes"
                });

            }

            res.json(resultados);

        }
    );

});


// ==========================================
// LOGOUT
// ==========================================

app.get("/logout", (req, res) => {

    res.redirect("/login/login.html");

});


// ==========================================
// SERVIDOR
// ==========================================

app.listen(3000, () => {

    console.log("----------------------------------");
    console.log("Servidor rodando!");
    console.log("http://localhost:3000");
    console.log("----------------------------------");

});