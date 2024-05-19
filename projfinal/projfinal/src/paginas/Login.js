import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link para criar links internos no React Router
import logoImage from '../paginas/Pictures/Login-removebg-preview.png';
// import '../styles/login.css'; // Importe o arquivo CSS da sua página de login


function Login(){
  return (
    <div>
      <a className="navbar-brand logo" href="#">
        <img id="logo" src={logoImage} alt="Logotipo do Pura Acqua" style={{ maxWidth: "100%", height: "auto" }} />
      </a>

      <div className="container2">
        <h2>Login</h2>
        <form action="/login" method="POST">
          {/* Campos para login: email, senha */}
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required /><br />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required /><br />
          <button type="submit">Login</button>
          {/* Use o Link do React Router para navegar para a página de recuperação de senha */}
          <Link to="/recuperarsenha" className="forgot-password">Esqueceu sua senha?</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
