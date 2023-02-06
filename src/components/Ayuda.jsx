import React from 'react';
import '../styles/Page.css';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const Ayuda = () => {
    return (
        <div className='page-main'>
            <h1 className='page-title p-4'>Preguntas</h1>
            <Accordion className='faq-content'>
            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>¿Qué es groop?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Groop es una plataforma de comercio electrónico en donde puedes encontrar tus productos favoritos de salud, belleza y cuidado personal a precios increíbles. Es muy sencillo realizar tu compra, solamente tienes que elegir tu punto de entrega sin costo y tu método de pago, en el que puedes escoger pago contra entrega.
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>¿Cómo puedo realizar un pedido?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Selecciona el producto que quieres comprar, después selecciona tu punto de entrega más conveniente y finalmente debes elegir tu método de pago. Al procesar tu pedido, te contactaremos por Whatsapp confirmando tu orden.
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>¿Qué son los puntos de entrega Groop?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                        Los puntos de entrega Groop son lugares ubicados estratégicamente alrededor de la Ciudad de México para que los usuarios puedan recoger sus pedidos sin costo de envío. Al hacer tu compra, selecciona el más conveniente para ti y recoge ahí tu pedido. Tenemos también la opción de envío a domicilio con costo adicional.
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default Ayuda