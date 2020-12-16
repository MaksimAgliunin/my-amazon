import React from 'react';
import './Checkout.css'
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

const Checkout = () => {

    const [{basket, user}] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className='checkout__ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2020/1207KBD/KBHP-Showcase_1500x300.jpg"
                    alt="checkout ad"
                />
                <div>
            </div>
                    <h3>Hello, {user ? user.email : 'Guest'}</h3>
                    <h2 className='checkout__title'>
                        Your shopping Basket
                    </h2>
                    {basket.map((el, i) =>
                        <CheckoutProduct
                            key={i}
                            id={el.id}
                            title={el.title}
                            rating={el.rating}
                            price={el.price}
                            image={el.image}
                        />
                    )}
                </div>


            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;
