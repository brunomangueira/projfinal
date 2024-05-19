const express = require('express');
const router = express.Router();
const db = require('../db/config');

router.post('/', (req, res) => {
    const { Nome_cadastro, Email_cadastro, Senha_cadastro } = req.body;
    const query = 'INSERT INTO cadastro (Nome_cadastro, Email_cadastro, Senha_cadastro) VALUES (?, ?, ?)';
    db.query(query, [Nome_cadastro, Email_cadastro, Senha_cadastro], (err, result) => {
        if (err) throw err;
        res.send('Cadastro criado com sucesso!');
    });
});

module.exports = router;
