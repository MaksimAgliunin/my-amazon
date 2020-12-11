import React from 'react';
import './Home.css'
import Product from "./Product";

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className='home__image'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/deals/trafficdrivers/Q4_2020_HolidayDeals_TrafficDrivers_Desktop_Hero_v1_1500x600._CB417563015_.jpg" alt='background'/>
                <div className="home__row">
                    <Product
                        id='1'
                        title='Apple Watch Series 6'
                        price={369.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71yOGVLGWpL._AC_UY218_.jpg"
                    />

                    <Product
                        id='2'
                        title='Apple Watch Series 5'
                        price={329.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71HtGqb9vXL._AC_UY218_.jpg"
                    />


                </div>
                <div className="home__row">
                    <Product
                        id='3'
                        title='Samsung Gear S2'
                        price={299.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/91WHbZPYOUL._AC_UY218_.jpg"
                    />
                    <Product
                        id='4'
                        title='Samsung Gear S3'
                        price={299.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/712kkMxQ2hL._AC_UY218_.jpg"
                    />
                    <Product
                        id='5'
                        title='Samsung Galaxy'
                        price={299.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61P033bD5gL._AC_UY218_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='6'
                        title='Casio Protrek'
                        price={499.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/81r9t+oQWzL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
