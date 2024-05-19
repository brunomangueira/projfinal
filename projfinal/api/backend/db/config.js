const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'tmj.mysql.database.azure.com',
    user: 'bruno',
    password: 'Fecap123',
    database: 'db_puraacqua'
});

/*connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

module.exports = connection;*/
