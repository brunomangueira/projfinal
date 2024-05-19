const express = require('express');
const router = express.Router();
const db = require('../db/config');

router.post('/', (req, res) => {
    const { Email_login, Senha_login, ID_cadastro } = req.body;

    const insertLogin = 'INSERT INTO login (Email_login, Senha_login, ID_cadastro) VALUES (?, ?, ?)';
    db.query(insertLogin, [Email_login, Senha_login, ID_cadastro], (err, result) => {
        if (err) {
            res.status(500).send('Error creating login');
            return;
        }
        res.send('Login created successfully!');
    });
});

router.post('/verify', (req, res) => {
    const { Email_login, Senha_login } = req.body;

    const queryLogin = 'SELECT * FROM login WHERE Email_login = ? AND Senha_login = ?';
    db.query(queryLogin, [Email_login, Senha_login], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao verficar o login');
            return;
        }

        if (results.length > 0) {
            const ID_cadastro = results[0].ID_cadastro;

            const queryCadastro = 'SELECT * FROM cadastro WHERE ID_cadastro = ?';
            db.query(queryCadastro, [ID_cadastro], (err, cadastroResults) => {
                if (err) {
                    res.status(500).send('Erro ao buscar cadastro');
                    return;
                }

                if (cadastroResults.length > 0) {
                    res.send(cadastroResults[0]);
                } else {
                    res.status(404).send('Cadastro não encontrado');
                }
            });
        } else {
            res.status(401).send('Credenciais de login inválidas');
        }
    });
});

module.exports = router;
