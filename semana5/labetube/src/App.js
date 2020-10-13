import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <body>
      <div className="tela-inteira">
        <header>
          <img id="logoLabenu" src="https://media-exp1.licdn.com/dms/image/C560BAQGXX-pQE9ZghQ/company-logo_200_200/0?e=2159024400&v=beta&t=NRNnB4OsKbfz2i_OVjaIigRiKqCI-k80WqKAnOpbLRw" />
          <h1>LabTube</h1>
          <div className="busca">
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            <img id="iconBusca" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" />
          </div>
          <div className="user">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAA4CAYAAAC8P2e6AAAEL0lEQVR4Xu2csTM0MRiHc62WlvbUWlpaWjqjM0NLxej4A5RGR3taWrWalpaW8r757UzuW4fdd/f2dsP7ZMYwd2+SzZM8e0k2pzccDoeBBAEIFBLoIQojBALlBBClnBEREAiIwiCAgIEAohggEQIBRGEMQMBAAFEMkAiBAKIwBiBgIIAoBkiEQABRGAMQMBBAFAMkQiCAKIwBCBgIIIoBEiEQQBTGAAQMBBDFAIkQCCAKYwACBgKIYoBESDsEnp+fw/X1dVbZ5uZmWFhYaKdiQy2IYoBESDsETk9Pw9PTU1ZZv98Ph4eH7VRsqAVRDJCmFbK9vf2l6MvLy+y1wWAQbm5uPr2/vr4eNjY2steK8k7reqdd7tHRUXh5eRlVE1lMu15L+YhioTSlGEQJ4f39Pdzd3YXb29vs73yamZkJa2trYXV1NejvLlMyotzf34e3t7faLObm5sLy8nLt/F1k9C6K1iQXFxdBv4uS1ioHBwedypKEKAJ1fHw88Vg9OTn5tACMHZDSojDfSM+i6NPj7OysVJLIq2tZkhDl8fExgzZp0l1ncXExK0aSqMy9vb3Ra5OW33R+z6J8twYr45tfo5XFNv3+rxAlClAmVIyLkuiulZenaXiUV5/A7u5u+Pj4qFSA1inn5+eV8jQV/OdEEUx9ksSFIaI0NVSaK6fshldUU1f9+adE0UMqbanmd0+6AmsZVpp+9Hq9T6GaXihpMMVnCjFAzxbi1LIor6XuLmO0wxUfLFa9DvWxdsLaTkmKoh2s2dnZEYutra1ska4p1dXV1eh17ZK9vr4WMktZFK9rlDrrk9jJXa1TkhTFCsMCHFHavveW12fpt59KsY6N8quoFoEo1Xg1Gs0nSnWciJLbHtbUSz8xxQNy+UNzek/TLqZe/wdbSkc+ihTgE6X6DWK0cC16jmLdHpZQ6oT8tmPKUy9d63iKZ7m0mNdPPmkhn1/M/5S3Zje0lg1RaqIu2y60ihKPOegUapQlZVFq4vr12RClZhc2KYruuJqiRVkQpWanTDEbotSEWyaKtdjxIyySZX9/nyMsVoAtxFU94zV+SXqgrH5u+/xeErteHIr8uiD/i99HmVSSSKkLWZIQRQB0zL5sB6vohqddspWVlRbuic1V4W17ePyLWZOQbPvcVzKiTALtt+b1Joqmwk2mNr8qjChN9lzFsryJUhFPUuGIklR3+L2Y7w5K7uzsJDOdRhS/YzOplmuhr6lZ/OcS8/Pz2X9h6fq78hESoiQ1XHxfjGR5eHjIICwtLSUjia4HUXyPTVpvJIAoRlCE+SaAKL77n9YbCSCKERRhvgkgiu/+p/VGAohiBEWYbwKI4rv/ab2RAKIYQRHmmwCi+O5/Wm8kgChGUIT5JoAovvuf1hsJIIoRFGG+CSCK7/6n9UYCiGIERZhvAojiu/9pvZHAP+fXJYbF3l2yAAAAAElFTkSuQmCC" />
          </div>
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>

              <li className="botoes-meunu-vertical"><img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg" id="icons" /> Início</li>
              <li className="botoes-meunu-vertical"><img src="https://icon-library.com/images/trending-icon/trending-icon-2.jpg" id="icons" />Em alta</li>
              <li className="botoes-meunu-vertical"><img src="https://cdn1.iconfinder.com/data/icons/youtube-23/31/Vector-4-512.png" id="icons" />Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical"><img src="https://icon-library.com/images/youtube-icon-png-white/youtube-icon-png-white-22.jpg" id="icons" />Originais</li>
              <li className="botoes-meunu-vertical"><img src="https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png" id="icons" />Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=2 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=3 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=4 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=5 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=6 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=7 " alt="" />
              <h4>{titulo}</h4>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=8 " alt="" />
              <h4>{titulo}</h4>
            </div>
          </section>
        </main>

        <footer>
          <h4>Todos os direitos reservados</h4>
        </footer>
      </div>
    </body>
  );
}

export default App;
