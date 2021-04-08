import React from 'react';
import './Pagina_Computador.css';
import computador1 from '../../assets/computadores/computador-completo-quantumpc.jpg';
import computador2 from '../../assets/computadores/computador-desktop-completo-easypc.jpg';
import computador3 from '../../assets/computadores/computador-completo-home-business-quantum-pc.jpg';

export default function Pagina_Computador() {
    return (
        <div>
            <div class="imgPC-container">
                <center>
                    <img src={computador1} width='80%'></img>
                    <p>Computador Completo Intel Core i5 8GB <br />
                    HD 2TB Monitor 19.5" LED HDMI Áudio 5.1 <br />
                    canais Quantum Star</p>
                    <h3>R$2.299,00</h3>
                </center>
                <center>
                    <img src={computador2} width='40%'></img>
                    <p>Computador Desktop Completo Com Monitor 24" <br />
                    Full HD LED HDMI Intel Core i5 8GB HD 1TB <br />
                    Com Caixas De Som Mouse e Teclado EasyPC <br />
                    Standard Plus</p>
                    <h3>R$2.636,99</h3>
                </center>
                <center>
                    <img src={computador3} width='60%'></img>
                    <p>Computador Completo Home and Business<br />
                    Intel Core i3 RAM 8GB HD 500GB Monitor 19.5"<br />
                    LED Quantum</p>
                    <h3>R$1.503,92</h3>
                </center>
            </div>
        </div>
    )
}