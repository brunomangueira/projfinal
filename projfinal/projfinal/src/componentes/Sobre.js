import React from 'react';
import tartarugaImg from '../paginas/Pictures/tartaruga_imagem-removebg-preview.png'; 

function Sobre() {
  return (
    <section id="sobre">
      <div className="container text720">
        <div className="row">
          <div className="col-md-6">
            <h1 className="tb-heading has-text-color" data-toolset-blocks-heading="0136c3721649b00810c5b9e56f2c8aab" data-last-update="1.4">O Que Nós Fazemos?</h1>
            <p>O projeto visa conscientizar as pessoas sobre a importância da conservação marinha e incentivá-las a contribuir com ONGs e iniciativas que trabalham para proteger os oceanos e a vida marinha.</p>
            <p>Ao promover a educação ambiental, a sustentabilidade e ações individuais e coletivas, o projeto busca garantir um futuro mais saudável e sustentável para as gerações futuras e para o nosso planeta como um todo.</p>
            <h1 className="tb-heading has-text-color" data-toolset-blocks-heading="0136c3721649b00810c5b9e56f2c8aab" data-last-update="1.4">Como você pode ajudar?</h1>
            <p>Você pode se juntar a nós apoiando nossas iniciativas, participando de eventos de conscientização e adotando hábitos sustentáveis em sua vida diária. Juntos, podemos fazer a diferença na proteção dos oceanos e na preservação da vida marinha para as futuras gerações.</p>
            <p>Junte-se a nós e faça parte desta importante missão de conservação marinha!</p>
          </div>
          <div className="col-md-6">
            <img id="tartaruga" src={tartarugaImg} alt="Tartaruga de Pente" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
