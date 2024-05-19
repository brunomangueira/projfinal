import React from "react";

function Cadastro(){
    return(
    <div>
      <h2>Cadastre-se</h2>
      <form action="/cadastro" method="POST">
        <label htmlFor="nome_completo">Nome Completo:</label>
        <input type="text" id="nome_completo" name="nome_completo" required /><br />
        
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required /><br />
        
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required /><br />
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro