const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "VoucherDev@2024",
    database: "clinica",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err.message);
        return;
    }

    console.log("MySQL conectado com sucesso!");
    connection.release();
});

module.exports = db;