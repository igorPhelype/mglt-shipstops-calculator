import React from 'react'

import "./styles.css"

interface LoaderProps {
    loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
    loading
}) => {
    return (
        <div
            style={{
                visibility: loading ? "visible" : "hidden"
            }}
            className="wrapper"
        >
            <div className="float">
            <div className="circle"></div>
            <div className="moon1"></div>
            <div className="circle2"></div>
            <div className="shape"></div>
            <div className="rectangle"></div>
            <div className="rectangle2"></div>
            <div className="rectangle3"></div>
            <div className="rectangle4"></div>
            <div className="rectangle5"></div>
            <div className="rectangle6"></div>
            <div className="rectangle7"></div>
            <div className="rectangle8"></div>
            <div className="rectangle9"></div>
            <div className="rectangle10"></div>
            <div className="rectangle11"></div>
            </div>
            <div className="star moving-star1"></div>
            <div className="star-large moving-star2"></div>
            <div className="star moving-star"></div>
            <div className="star-large moving-star4"></div>
            <div className="star moving-star5"></div>
            <div className="star-large moving-star6"></div>
            <div className="star moving-star7"></div>
            <div className="star-large moving-star8"></div>
            <div className="star moving-star9"></div>
            <div className="star-large moving-star10"></div>
        </div>
    )
}

export default Loader
