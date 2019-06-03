import React from 'react';
import './style.scss';


const Rating = ({rating}) => {

    return (
        <div className="rating-component">
            {
                (new Array(5)).fill(0).map( (element, index) => index<rating?
                    <span key={index} className="rating-component__star rating-component__star--filled">
                        ★
                    </span>
                    :
                    <span key={index} className="rating-component__star rating-component__star--not-filled">
                        ★
                    </span>
                )
            }
        </div>
    )
}
export default Rating;