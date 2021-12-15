import React, { useEffect, useState } from 'react'; // importar de react
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import StoreProvider from './components/store/provider';
import RoutesPrivate from './components/routes/private/private';

// Pages
import TelaLogin from './pages/telaLogin/telaLogin';
import TelaCadastro from './pages/telaCadastro/telaCadastro';
import Cart from './pages/carrinhoCompras/CarrinhoCompras';
import Products from './pages/produtos_home/Products';
import Pagina_Computador from './pages/pagina_computador/Pagina_Computador';
//import Pagina_Monitor from './pages/pagina_monitor/Pagina_Monitor';
import Pagina_Celulares from './pages/pagina_celulares/Pagina_Celulares';
import Pagina_Acessorios from './pages/pagina_acessorios/Pagina_Acessorios';
import Pagina_Televisao from './pages/pagina_televisao/Pagina_Televisao';
import PromocoesDoDia from './pages/promocoesDoDia/PromocoesDoDia';
import Eletronicos from './pages/eletronicos/Eletronicos';
import Lancamentos from './pages/lancamentos/Lancamentos';
import TelaSuporte from './pages/telaSuporte/telaSuporte';

// Components
import Menu from './components/menu/menu';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import ChatBotSimples from './components/chatbot/chatbot';

// CSS
import './App.css';
import './TelaInicial-Responsiva.css';

//Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InputIcon from '@material-ui/icons/Input';


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function Home() {
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  //estado utilizado para armazenar a variavel no localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  /*   const removeFromCart = (productToRemove) => {
      setCart(
        cart.filter((product) => product !== productToRemove),
      );
    }; */

  const addToCart = (product) => {
    const exist = cart.find(x => x.id === product.id);
    if (exist) {
      setCart(cart.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  };

  /*   const addToCart = (product) => {
      setCart([...cart, { ...product }]);
    }; */

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (

    <div>
      <div class="buttons">
        <div class="loginOp">
          <div class="iconLogin">
            <InputIcon fontSize="large" color="white" />
            <a type="button" id="login" href="/login">
              Login
            </a>
          </div>
        </div>
        <div class="cadastroOp">
          <div class="iconLogin">
            <InputIcon fontSize="large" color="white" />
            <a type="button" id="login" href="/cadastro">
              Cadastro
            </a>
          </div>
        </div>
        <div class="cart-item">
          <div class="icon">
            <ShoppingCartIcon fontSize="large" color="white" />
            <a type="button" id="carrinho" onClick={() => navigateTo(PAGE_CART)}>
              Carrinho ({cart.length === 0 ? "" : cart.length})
            </a>
          </div>
        </div>
      </div>
      {page === PAGE_PRODUCTS && (
        <Products addToCart={addToCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
}

function App() {
  var btn = document.querySelector("#show-hide");

  function click() {
    var container = document.querySelector('.chatbot');
    if (container.style.display === 'block') {
      container.style.display = 'none';
    } else {
      container.style.display = 'block';
    }
  };

  return (
    <div className="App">

      <Banner />
      <Menu />
      <StoreProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={TelaLogin} />
            {/*           <RoutesPrivate path="/" component={Home} /> */}
            <Route exact path="/cadastro" component={TelaCadastro} />
            <Route exact path="/pagina-computador" component={Pagina_Computador} />
            <Route exact path="/pagina-celulares" component={Pagina_Celulares} />
            <Route exact path="/pagina-acessorios" component={Pagina_Acessorios} />
            <Route exact path="/pagina-televisao" component={Pagina_Televisao} />
            <Route exact path="/promocoes-do-dia" component={PromocoesDoDia} />
            <Route exact path="/eletronicos" component={Eletronicos} />
            <Route exact path="/lancamentos" component={Lancamentos} />
            <Route exact path="/suporte" component={TelaSuporte} />
          </Switch>
        </BrowserRouter>
      </StoreProvider>
      <ChatBotSimples />
      <button id="show-hide" onClick={click}>
        <FontAwesomeIcon icon={ faComments } />
      </button>
      <Footer />
    </div>
  );
}


export default App;