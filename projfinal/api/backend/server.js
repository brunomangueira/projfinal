const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cadastroRoutes = require('./routes/cadastro');
const loginRoutes = require('./routes/login');
const usuarioRoutes = require('./routes/usuario');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/cadastro', cadastroRoutes);
app.use('/login', loginRoutes);
app.use('/usuario', usuarioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
