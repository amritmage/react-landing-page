import React from 'react';
import '../styles/Page.css';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const Faq = () => {
    return (
        <div className='page-main'>
            <h1 className='page-title p-4'>Questions</h1>
            <Accordion className='faq-content'>
            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>What is group?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Groop is an e-commerce platform where you can find your favorite health, beauty and personal care products at incredible prices. It is very easy to make your purchase, you only have to choose your free delivery point and your payment method, in which you can choose payment on delivery.
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>How can I place an order?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Select the product you want to buy, then select your most convenient delivery point and finally you must choose your payment method. When processing your order, we will contact you by Whatsapp confirming your order.
                    </div>
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader className="w-full flex justify-between items-center text-gray-600 border-b p-4">
                    <h3 className={`accordion-title`}>What are Groop delivery points?</h3>
                </AccordionHeader>

                <AccordionBody>
                    <div className="p-5 font-light">
                    Groop delivery points are places strategically located around Mexico City so that users can pick up their orders at no shipping cost. When making your purchase, select the most convenient for you and pick up your order there. We also have the option of home delivery at an additional cost.
                    </div>
                </AccordionBody>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default Faq