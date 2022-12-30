import React from "react";
import {AiOutlineInstagram} from 'react-icons/ai';

function Footer(){
    return(
        <div>
            <footer className="bg-success position-absolute w-100 b-0">
                <div className="bg-success d-flex justify-content-around">
                    <div>
                        <div className="p-4 text-white d-flex flex-column">
                            Medios de pagos
                            <div className="m-1">
                                <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/visa.png" alt="visa" className="tarjeta"></img>
                                <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mastercard.png" alt="master" className="tarjeta"></img>
                            </div>
                        </div>
                        <div className="p-4 text-white d-flex flex-column">
                            Medios de envios
                            <div className="m-1">
                                <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/personalizado.png" alt="envio" className="tarjeta"></img>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-4 text-white d-flex flex-column">
                            Nuestras redes sociales
                            <div className="m-1">
                               <a href="https://www.instagram.com/fgrubarth/" target="_blank" rel="noreferrer" ><AiOutlineInstagram className="text-decoration-none text-white tarjeta" /></a>
                            </div>
                        </div>
                        <div className="p-4 text-white d-flex flex-column">
                            Contacto
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer"className="text-decoration-none text-white m-1 p-2"> shivaseeds.web@gmail.com</a>
                        </div>
                    </div>
                </div>
                <p className="d-flex justify-content-end">Tienda creada por  <a href="https://www.instagram.com/fgrubarth/" target="_blank" rel="noreferrer" className="text-decoration-none text-white ">@fgrubarth</a></p>
            </footer>
        </div>
    );
}

export default Footer;