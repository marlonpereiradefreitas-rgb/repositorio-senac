const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

const usuariosRoutes = require('./usuarios');
const alunosRoutes = require('./alunos');
const professoresRoutes = require('./professores');
const cursosRoutes = require('./cursos');

app.use('/usuarios', usuariosRoutes);
app.use('/alunos', alunosRoutes);
app.use('/professores', professoresRoutes);
app.use('/cursos', cursosRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});