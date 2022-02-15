import React, { useState } from 'react'
import './ProductCard.css'

import RedController from './images/red.png'
import GreenController from './images/green.png'
import YellowController from './images/yellow.png'
import AquaController from './images/blue.png'

const ProductCard = () => {

    const [image, setImage] = useState(RedController)

    return (
        <div className="product-card-wrapper">
            <img src={image} alt="" className="product-image" />
            <div className="product-info-wrapper">
                <h1 className="product-title">DualSense Wireless Controller</h1>
                <p className="product-description">Discover a deeper gaming experience with this innovative new controller.</p>
                <span className="product-price">$199.99</span>
                <div className="color-selection-wrapper">
                    <p className="color-selection-label">Choose color</p>
                    <div className="colors-wrapper">
                        <div onMouseOver={() => setImage(RedController)} className="color red"></div>
                        <div onMouseOver={() => setImage(AquaController)} className="color aqua"></div>
                        <div onMouseOver={() => setImage(GreenController)} className="color green"></div>
                        <div onMouseOver={() => setImage(YellowController)} className="color yellow"></div>
                    </div>
                </div>
                <button className="buy-now-button">Buy Now</button>
            </div>
        </div>
    )
}

export default ProductCard