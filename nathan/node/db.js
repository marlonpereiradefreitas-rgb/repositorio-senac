const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "VoucherDev@2024",
    database: "node00"
});

db.connect((erro) => {

    if (erro) {
        console.error("Erro ao conectar ao MySQL:");
        console.error(erro);
        return;
    }

    console.log("MySQL conectado com sucesso!");
});

module.exports = db;