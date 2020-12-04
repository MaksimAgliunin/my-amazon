import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <div className="product">
            <div className="product__info">
                <p>Apple Watch</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>399.99</strong>
                </p>
                <div className="product__rating">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_SX148_SY213_QL70_.jpg" alt=""/>
            <button>Add to Basket</button>
        </div>
    );
};

export default Product;
