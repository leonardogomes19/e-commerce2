import React from 'react';
import '../menu/menu.css';

export default function Menu() {
  return (
        <nav class="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a>Categorias</a>
              <ul>
                <li><a href="/pagina-computador">Computador
                </a>
                </li>
                <li><a href="/pagina-televisao">Televisão</a></li>
                <li><a href="/pagina-celulares">Celulares</a></li>
                <li><a href="/pagina-acessorios">Acessórios</a></li>
              </ul>
            </li>
            <li><a href="/promocoes-do-dia">Promoções do Dia</a></li>
            <li><a href="/eletronicos">Eletrônicos</a></li>
            <li><a href="/lancamentos">Lançamentos</a></li>

          </ul>
        </nav>
  );
}
