CREATE TABLE cadastro (
    ID_cadastro INT AUTO_INCREMENT PRIMARY KEY,
    Nome_cadastro VARCHAR(100) NOT NULL,
    Email_cadastro VARCHAR(100) NOT NULL UNIQUE,
    Senha_cadastro VARCHAR(60) NOT NULL
    );

CREATE TABLE login (
    ID_login INT AUTO_INCREMENT PRIMARY KEY,
    Email_login VARCHAR(100) NOT NULL,
    Senha_login VARCHAR(60) NOT NULL,
    ID_cadastro INT,
    FOREIGN KEY (ID_cadastro) REFERENCES cadastro(ID_cadastro)
);

CREATE TABLE usuario (
	ID_usuario INT AUTO_INCREMENT PRIMARY KEY,
    Email_usuario VARCHAR(100) NOT NULL,
    Senha_usuario VARCHAR(60) NOT NULL,
    ID_login INT,
    FOREIGN KEY (ID_login) REFERENCES login(ID_login)
);
