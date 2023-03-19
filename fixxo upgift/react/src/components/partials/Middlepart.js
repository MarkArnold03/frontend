import React from 'react'
import partyImage from '../../assets/images/products/black-coat.png'
import officeImage from '../../assets/images/products/'
const Middlepart = () => {
    return (
        <section className="middlecase">

            <div className="box">
                <div className="box box-1">
                    <div className="box-image">
                        <img src={officeImage} alt="Office Style" className="box1-image" />
                    </div>
                    <div className="box-content">
                        <h2 className="box-title">Office Style</h2>
                        <button className="shop-button">Shop Now</button>
                    </div>
                </div>
                <div className="box box-2">
                    <div className="box-content">
                        <h2 className="box-title">50% Offer</h2>
                        <p className="box-text">Limited time only! Get 50% off on all items</p>
                        <button className="flash-sale-button">FLASH SALE</button>
                    </div>
                </div>
                <div className="box box-3">
                    <div className="box-image">
                        <img src={partyImage} alt="Party Style" />
                    </div>
                    <div className="box-content">
                        <h3>Party Style</h3>
                        <button className="btn">Shop Now</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Middlepart