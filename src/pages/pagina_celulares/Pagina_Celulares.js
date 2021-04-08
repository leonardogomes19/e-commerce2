import React from 'react';
import './Pagina_Celulares.css';
import celulares1 from '../../assets/celulares/samsung-galaxy-a10s.jpg';
import celulares2 from '../../assets/celulares/motorola-moto-g8.jpg';
import celulares3 from '../../assets/celulares/xiaomi-redmi-note-9s.jpg';

export default function Pagina_Celulares(){
    return (
        <div>
            <div class="imgCel-container">
                <center>
                    <img src={celulares1} width='60%'></img>
                    <p>Computador Completo Intel Core i5 8GB <br/> 
                    HD 2TB Monitor 19.5" LED HDMI Áudio 5.1 <br />
                    canais Quantum Star</p>
                    <h3>R$2.299,00</h3>
                </center>
                <center>
                    <img src={celulares2} width='50%'></img>
                    <p>Smartphone Motorola Moto G8 Play Preto<br/> 
                    Onix 32GB, Tela Max Vision de 6.2” HD+, <br/>
                    Câmera Traseira Tripla, Android 9.0 <br/>
                    e Processador Octa-Core</p>
                    <h3>R$949,90</h3>
                </center>
                <center>
                    <img src={celulares3} width='40%'></img>
                    <p>Smartphone Xiaomi Redmi Note 9S - 4GB<br/> 
                    + 64GB - Versão Global - Aurora Blue</p>
                    <h3>R$1.565,00</h3>                  
                </center>
                </div>
        </div>
    )
}