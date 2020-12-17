import React, {useState} from 'react';
import './Payment.css'
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {getBasketTotal} from "./reducer";
import CurrencyFormat from "react-currency-format";


const Payment = () => {

    const [{basket, user}, dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false)
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe
    };

    const handleChange = (event) => {
        //Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '')
    };

    return (
        <div className='payment'>
            <div className="payment__container">

                <h1>
                    Checkout (
                    <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA </p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((el, i) => (
                            <CheckoutProduct
                                key={i}
                                id={el.id}
                                title={el.title}
                                rating={el.rating}
                                price={el.price}
                                image={el.image}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button
                                    disabled={processing || disabled || succeeded}
                                >
                                    <span>
                                        {processing ? <p>Processing</p> : 'Buy now'}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;
