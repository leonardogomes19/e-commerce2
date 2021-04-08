import React from 'react';
import api from './api';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Pagina_Computador from './pages/pagina_computador/Pagina_Computador';
//import Pagina_Monitor from './pages/pagina_monitor/Pagina_Monitor';
import Pagina_Celulares from './pages/pagina_celulares/Pagina_Celulares';
import Pagina_Acessorios from './pages/pagina_acessorios/Pagina_Acessorios';
import Pagina_Televisao from './pages/pagina_televisao/Pagina_Televisao';
import PromocoesDoDia from './pages/promocoesDoDia/PromocoesDoDia';
import Eletronicos from './pages/eletronicos/Eletronicos';
import Lancamentos from './pages/lancamentos/Lancamentos';

// Components
import Menu from './components/menu/menu';
import Banner from './components/banner/banner';

// Assets
import celular1 from './assets/celulares/samsung-galaxy-a10s.jpg';
import computador1 from './assets/computadores/computador-desktop-completo-easypc.jpg';
import televisao1 from './assets/televisao/smart-tv-led-50-philips.jpg';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pagina-computador" component={Pagina_Computador} />
          <Route exact path="/pagina-celulares" component={Pagina_Celulares} />
          <Route exact path="/pagina-acessorios" component={Pagina_Acessorios} />
          <Route exact path="/pagina-televisao" component={Pagina_Televisao} />
          <Route exact path="/promocoes-do-dia" component={PromocoesDoDia} />
          <Route exact path="/eletronicos" component={Eletronicos} />
          <Route exact path="/lancamentos" component={Lancamentos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const Home = () => (
  <div>
    <center>
      <h1>Destaques</h1>
    </center>
    <div class="img-container">
      <center>
        <img src={celular1} width='40%'></img>
        <p>Samsung Galaxy A10s</p>
        <h3>R$759,05</h3>
      </center>
      <center>
        <img src={computador1} width='40%'></img>
        <p>Computador Desktop Completo Com Monitor 24" <br />
          Full HD LED HDMI Intel Core i5 8GB HD 1TB <br />
          Com Caixas De Som Mouse e Teclado EasyPC <br />
          Standard Plus</p>
        <h3>R$2.636,99</h3>
      </center>
      <center>
        <img src={televisao1} width='40%'></img>
        <p>Smart TV LED 50" Philips Série 6600 4K <br />
          HDR 50PUG6654/78</p>
        <h3>R$2.200,79</h3>
      </center>
    </div>
  </div>
);

export default App;
