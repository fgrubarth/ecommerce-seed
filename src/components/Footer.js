import React from "react";
import {AiOutlineInstagram} from 'react-icons/ai';

function Footer(){
    return(
        <div>
            <footer className=" text-center position-absolute w-100 b-0">
                <div className="d-flex justify-content-center footer">
                    <div className="col">
                        <p className="p-4 d-flex flex-column col ">
                        Shiva Seed aconseja a todos sus clientes que comprueben las normativas y leyes locales antes de proceder a la germinación. Shiva Seed no se responsabiliza de las acciones de aquellos que actúen en contra de las leyes y normativas que son de aplicación en su país. Las semillas de cannabis deben conservarse como un recuerdo coleccionable por cualquiera que viva en una zona donde el cultivo de cannabis no sea legal.
                        </p>
                    </div>
                    <div className="col footer2">
                        <div className="p-4 d-flex flex-column fw-bold">
                            Medios de pagos
                            <div className="m-1">
                                <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/visa.png" alt="visa" className="tarjeta"></img>
                                <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-pago/mastercard.png" alt="master" className="tarjeta"></img>
                            </div>
                        </div>
                        <div className="p-4  d-flex flex-column fw-bold">
                            Medios de envios
                            <div className="m-1">
                                <img src="https://dk0k1i3js6c49.cloudfront.net/iconos-envio/personalizado.png" alt="envio" className="tarjeta"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col footer3">
                        <div className="p-4 d-flex flex-column fw-bold">
                            Nuestras redes sociales
                            <div className="m-1">
                               <a href="https://www.instagram.com/fgrubarth/" target="_blank" rel="noreferrer" ><AiOutlineInstagram className="text-decoration-none tarjeta" /></a>
                            </div>
                        </div>
                        <div className="p-4 d-flex flex-column fw-bold">
                            Contacto
                            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer"className="text-decoration-none m-1 p-2"> shivaseeds.web@gmail.com</a>
                        </div>
                    </div>
                </div>
                <p className="d-flex justify-content-center pb--5 fs-6">Tienda creada por  <a href="https://www.instagram.com/fgrubarth/" target="_blank" rel="noreferrer" className="text-decoration-none">@fgrubarth</a></p>
            </footer>
        </div>
    );
}

export default Footer;