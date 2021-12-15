import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import SideMenu from '../sideMenu/sideMenu';
import riscoMenu from '../../assets/risco-menu.png';
import '../menu/menu.css';
import '../../responsivo/Menu-Responsivo.css';

export default function Menu() {

  return (
    <nav class="menu">
        <input type="checkbox" class="toggle-menu"/>
        <div class="hamburger"></div>
      <ul class="nav-list">
        <li><a type="button" href="/">Home</a></li>
        <li><a type="button" href="#">Categorias</a>
          <ul>
            <li><a type="button" href="/pagina-computador">Computadores</a></li>
            <li><a type="button" href="/pagina-celulares">Celulares</a></li>
            <li><a type="button" href="/pagina-acessorios">Acessórios</a></li>
          </ul>
        </li>
        <li><a type="button" href="/promocoes-do-dia">Promoções</a></li>
        {/* <li><a type="button" href="/eletronicos">Eletrônicos</a></li> */}
        <li><a type="button" href="/lancamentos">Lançamentos</a></li>
        <li><a type="button" href="/suporte">Suporte</a></li>
      </ul>
    </nav>

  );
}
