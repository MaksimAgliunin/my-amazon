import React from 'react';
import './Checkout.css'
import Subtotal from "./Subtotal";

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className='checkout__ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2020/1207KBD/KBHP-Showcase_1500x300.jpg"
                    alt="checkout ad"
                />
                <div>
                    <h2 className='checkout__title'>
                        Your shopping Basket
                    </h2>
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                </div>
            </div>


            <div className="checkout__right">
                <Subtotal />
                <h2>The subtotal</h2>
            </div>
        </div>
    );
};

export default Checkout;
