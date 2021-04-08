import React from 'react';
import './Pagina_Acessorios.css';
import acessorio1 from '../../assets/acessorios/fone-de-ouvido-stereo-dobravel-mdr-zx110-preto-sony2.jpg';
import acessorio2 from '../../assets/acessorios/philips-she-1350-00-fone-ouvido.jpg';
import acessorio3 from '../../assets/acessorios/mouse-com-fio-usb-logitech-m90-cinza.jpg';

export default function Pagina_Acessorios() {
    return (
        <div>
            <div class="imgAcs-container">
                <center>
                    <img src={acessorio1} width='20%'></img>
                    <p>Sony MDR-ZX110 - Fone de Ouvido <br/>
                    Dobrável, Preto</p>
                    <h3>R$89,00</h3>
                </center>
                <center>
                    <img src={acessorio2} width='40%'></img>
                    <p>Philips SHE1350/00 Fone Ouvido <br/>
                    - Pto</p>
                    <h3>R$19,90</h3>
                </center>
                <center>
                    <img src={acessorio3} width='40%'></img>
                    <p>Mouse com fio USB Logitech M90 <br/> 
                    - Cinza</p>
                    <h3>R$24,90</h3>
                </center>
            </div>
        </div>
    )
}