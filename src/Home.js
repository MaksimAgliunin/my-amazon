import React from 'react';
import './Home.css'
import Product from "./Product";

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className='home__image'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/deals/trafficdrivers/Q4_2020_HolidayDeals_TrafficDrivers_Desktop_Hero_v1_1500x600._CB417563015_.jpg"/>
                <div className="home__row">
                    <Product
                        title='Apple Watch'
                        price={399.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_SX148_SY213_QL70_.jpg"
                    />
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    );
};

export default Home;
