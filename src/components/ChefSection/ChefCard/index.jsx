import React from 'react';
import './style.scss';

const ChefCard = (props) => {
    const {
        full_name,
        image : {
            url
        }
    } = props;
    return (
        <div className="chef-card">
            <figure className="chef-card__picture">
                <img src={url} alt=""/>
            </figure>
            <div className="chef-card__header">
                <h1>
                    {full_name}
                </h1>
            </div>
        </div>
    )
}

export default ChefCard;
