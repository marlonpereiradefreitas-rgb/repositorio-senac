const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const db = require("./db");

const app = express();

const PORT = 3000;

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

                    console.error(err);

                    return res.status(500).json({
                        mensagem: "Erro ao cadastrar usuário."
                    });
                }

                res.status(201).json({
                    mensagem: "Usuário cadastrado com sucesso!",
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

    const sql =
        "SELECT * FROM usuarios WHERE email = ?";

    db.query(sql, [email], async (err, resultados) => {

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
            await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {

            return res.status(401).json({
                mensagem: "E-mail ou senha incorretos."
            });
        }

        res.json({
            mensagem: "Login realizado com sucesso!",
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        });
    });
});

app.post("/animais", (req, res) => {

    const {
        nome,
        especie,
        raca,
        idade,
        dono
    } = req.body;

    const sql = `
        INSERT INTO animais
        (nome, especie, raca, idade, dono)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [nome, especie, raca, idade, dono],
        (err, resultado) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    mensagem: "Erro ao cadastrar animal."
                });
            }

            res.status(201).json({
                mensagem: "Animal cadastrado com sucesso!",
                id: resultado.insertId
            });
        }
    );
});

app.get("/animais", (req, res) => {

    db.query(
        "SELECT * FROM animais ORDER BY id DESC",
        (err, resultados) => {

            if (err) {

                return res.status(500).json({
                    mensagem: "Erro ao buscar animais."
                });
            }

            res.json(resultados);
        }
    );
});

app.post("/veterinarios", (req, res) => {

    const {
        nome,
        crmv,
        especialidade
    } = req.body;

    const sql = `
        INSERT INTO veterinarios
        (nome, crmv, especialidade)
        VALUES (?, ?, ?)
    `;

    db.query(
        sql,
        [nome, crmv, especialidade],
        (err, resultado) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    mensagem: "Erro ao cadastrar veterinário."
                });
            }

            res.status(201).json({
                mensagem: "Veterinário cadastrado com sucesso!",
                id: resultado.insertId
            });
        }
    );
});

app.get("/veterinarios", (req, res) => {

    db.query(
        "SELECT * FROM veterinarios ORDER BY id DESC",
        (err, resultados) => {

            if (err) {

                return res.status(500).json({
                    mensagem: "Erro ao buscar veterinários."
                });
            }

            res.json(resultados);
        }
    );
});

app.post("/consultas", (req, res) => {

    const {
        animal_id,
        veterinario_id,
        data,
        hora,
        motivo
    } = req.body;

    const sql = `
        INSERT INTO consultas
        (animal_id, veterinario_id, data, hora, motivo)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            animal_id,
            veterinario_id,
            data,
            hora,
            motivo
        ],
        (err, resultado) => {

            if (err) {

                console.error(err);

                return res.status(500).json({
                    mensagem: "Erro ao cadastrar consulta."
                });
            }

            res.status(201).json({
                mensagem: "Consulta cadastrada com sucesso!",
                id: resultado.insertId
            });
        }
    );
});

app.get("/consultas", (req, res) => {

    const sql = `
        SELECT
            consultas.id,
            animais.nome AS animal,
            veterinarios.nome AS veterinario,
            consultas.data,
            consultas.hora,
            consultas.motivo
        FROM consultas
        INNER JOIN animais
            ON consultas.animal_id = animais.id
        INNER JOIN veterinarios
            ON consultas.veterinario_id = veterinarios.id
        ORDER BY consultas.data DESC
    `;

    db.query(sql, (err, resultados) => {

        if (err) {

            console.error(err);

            return res.status(500).json({
                mensagem: "Erro ao buscar consultas."
            });
        }

        res.json(resultados);
    });
});

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "login.html")
    );
});

app.listen(PORT, () => {
    console.log(
        `Clínica rodando em http://localhost:${PORT}`
    );
});