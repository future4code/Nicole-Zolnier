import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import euzinha from './img/eurosa.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardSkills from './components/CardSkills/CardSkills';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={euzinha}
          nome="Nicole Zolnier"
          descricao="Oi, eu sou a Nicole! Eu sou de Curitiba, BR e atualmente sou estudante do curso Web Full Stack da Labenu. Adoro tecnologia desde criança quando conheci o Club Penguin!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://i.pinimg.com/564x/1f/5c/79/1f5c79832b4d0fddf889e3fc956a992c.jpg"
          nome="Email:"
          descricao="nicole@queroumemprego.com"
        />

        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/1239/1239525.png"
          nome="Endereço:"
          descricao="Rua dos Desempregados, 123 - Curitiba"
        />

      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande
          imagem="https://upload.wikimedia.org/wikipedia/en/thumb/8/81/University_of_Central_Florida_seal.svg/1200px-University_of_Central_Florida_seal.svg.png"
          nome="University of Central Florida"
          descricao="2021 - 2025 Bacharel em Ciência da Computação"
        />
        <CardGrande
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB6PsJHrWqpD7Uf_ya3wWAt7t86kHYw0Fdjw&usqp=CAU"
          nome="Labenu"
          descricao="2020 - 2021 Curso Web Full Stack"
        />
        <CardGrande
          imagem="https://www.sesipr.org.br/colegiosesi/internacional/dbimages/icon-colegiosesiinter_248900_img.jpg"
          nome="Colégio Sesi Internacional de Curitiba"
          descricao="2017 - 2019 Ensino Médio"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://www.sesipr.org.br/colegiosesi/internacional/dbimages/icon-colegiosesiinter_248900_img.jpg"
          nome="Grêmio Estudantil - Colégio Sesi Internacional de Curitiba"
          descricao="Atuei como Diretora de tecnologia no Grêmio Estudantil do Colégio SESI Internacional de Curitiba, onde pude aprimorar meus conhecimentos no Adobe Photoshop e aprender mais ainda como ter sucesso trabalhando em equipe"
        />

        <CardGrande
          imagem="https://leandromattioli.com.br/static/obr/img/logo-obr-720p.png"
          nome="Medalhista de Ouro - Etapa Regional Olimpiada Brasileira de Robótica"
          descricao="Minha equipe ganhou medalha de ouro na etapa regional da OBR. Todavia, os ensinamentos foram ainda maiores, pude aprender muito sobre programação e montagem de robôs durante a Olimpíada."
        />

        <CardGrande
          imagem="https://i.imgur.com/XVDM89z.png"
          nome="Organizadora e Palestrante - Mostra de Ideias Márcia Rigon"
          descricao="Auxiliei na organização do evento Mostra de Ideias Márcia Rigon, cuidando da parte de divulgação do evento. Além disso, tive a oportunidade de palestrar sobre a ferramenta OneNote no palco e ainda divulgar uma pesquisa sobre a Indústria Têxtil com uma colega"
        />
      </div>

      <div className="page-section-container">
        <h2>Idiomas</h2>
        <CardPequeno
          imagem="https://i.imgur.com/IlsT6XK.png"
          nome="Inglês:"
          descricao="Fluente"
        />
        <CardPequeno
          imagem="https://st.depositphotos.com/1049549/1396/i/450/depositphotos_13961460-stock-photo-the-french-flag.jpg"
          nome="Francês:"
          descricao="Básico"
        />
      </div>

      <div className="page-section-container">
        <h2>Hard Skills</h2>
        <div className="skill-container">
          <CardSkills
            imagem="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
            nome="HTML"
            descricao="Básico"
          />

          <CardSkills
            imagem="https://ucarecdn.com/f49e8fc4-876f-49ef-934f-89812fc4125e/"
            nome="CSS"
            descricao="Básico"
          />

          <CardSkills
            imagem="https://www.easyprogramming.net/logo/js.png"
            nome="Javascript"
            descricao="Básico"
          />

          <CardSkills
            imagem="https://iconape.com/wp-content/files/ni/64759/png/git-icon.png"
            nome="Git"
            descricao="Básico"
          />
        </div>
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
