import React, { useEffect, useState } from 'react';
import './Pagina_Televisao.css';
import Cart from '../carrinhoCompras/CarrinhoCompras';
import Products from './Products';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export default function Pagina_Acessorios() {
    const [cart, setCart] = useState(cartFromLocalStorage);
    const [page, setPage] = useState(PAGE_PRODUCTS);

    //estado utilizado para armazenar a variavel no localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove),
        );
    };

    const addToCart = (product) => {
        setCart([...cart, { ...product }]);
    };

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    return (

        <div>
            <div class="cart-item">
                <div class="icon">
                    <ShoppingCartIcon fontSize="large" color="white" />
                    <a type="button" id="carrinho" onClick={() => navigateTo(PAGE_CART)}>
                        Carrinho ({cart.length === 0 ? "" : cart.length})
                    </a>
                </div>
            </div>
            {page === PAGE_PRODUCTS && (
                <Products addToCart={addToCart} />
            )}
            {page === PAGE_CART && (
                <Cart cart={cart} removeFromCart={removeFromCart} />
            )}
        </div>
    );

}