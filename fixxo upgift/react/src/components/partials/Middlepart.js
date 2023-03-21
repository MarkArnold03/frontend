import React from 'react'
import partyImage from '../../assets/images/party-style.png'
import officeImage from '../../assets/images/office-style.png'
const Middlepart = () => {
    return (
        <section className="middlecase">

            <div className="box">
                <div className="box-1">
                        <img src={officeImage} alt="Office Style" className="box1-image" />
                </div>
                <div className="box-2">
                    <div className="content">
                        <h2 className="title">50% Offer</h2>
                        <p className="text">Limited time only! Get 50% off on all items</p>
                        <button className="flash-sale-button">FLASH SALE</button>
                    </div>
                </div>
                <div className=" box-3">
                        <img src={partyImage} alt="Office Style" className="box3-image" />
                </div>
            </div>

        </section>
    )
}

export default Middlepart