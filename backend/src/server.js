const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const sequelize = require('./database/index');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida!');
    })
    .catch((error) => {
        console.error('Erro ao conectar com o banco de dados:', error);
    });

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});