import React from 'react';
import './Pagina_Televisao.css';
import televisao1 from '../../assets/televisao/smart-tv-led-50-philips.jpg';
import televisao2 from '../../assets/televisao/smart-tv-led-43-full-hd-lg.jpg';
import televisao3 from '../../assets/televisao/smart-tv-full-hd-led-43-samsung.jpg';

export default function Pagina_Televisao() {
    return (
        <div>
            <div class="imgTV-container">
                <center>
                    <img src={televisao1} width='60%'></img>
                    <p>Smart TV LED 50" Philips Série 6600 4K <br />
                    HDR 50PUG6654/78</p>
                    <h3>R$2.200,79</h3>
                </center>
                <center>
                    <img src={televisao2} width='60%'></img>
                    <p>Smart TV LED 43" Full HD Samsung <br/>
                    LH43BETMLGGXZD, 2 HDMI, 1 USB, Wi-Fi, <br/> 
                    HDR, Sistema Operacional Tizen e Dolby <br/> 
                    Digital Plus</p>
                    <h3>R$1.799,91</h3>
                </center>
                <center>
                    <img src={televisao3} width='60%'></img>
                    <p>Smart TV LED 43" Full HD LG <br/>
                    43LM6300PSB ThinQ AI Inteligência <br/>
                    Artificial com IoT, Virtual Surround <br/>
                    Sound, WebOS 4.5, HDR, Quad Core, <br/>
                    Bluetooth e HDMI</p>
                    <h3>R$1.992,00</h3>
                </center>
            </div>
        </div>
    )
}