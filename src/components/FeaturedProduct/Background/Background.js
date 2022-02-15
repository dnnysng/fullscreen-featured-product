import React from 'react'
import './Background.css'

const Background = () => {
    return (
        <div className="bg-wrapper">
            <div className="bg-electric-lines-left"></div>
            <div className="bg-electric-lines-right"></div>
            <div className="bg-controller"></div>
            <div className="bg-blob-left"></div>
            <div className="bg-blob-right"></div>
        </div>
    )
}

export default Background