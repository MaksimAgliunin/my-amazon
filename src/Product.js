import React from 'react';
import './Product.css'
import {useStateValue} from "./StateProvider";

const Product = ({id, title, price, rating, image}) => {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch some basket to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <div className='product__title'>{title}</div>
                <div className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="watch"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;
