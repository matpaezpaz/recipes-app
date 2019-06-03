import React from 'react';
import './style.scss';
import { CHEFS } from '../../../routes';
import { Link } from "react-router-dom";

const ChefCard = (props) => {
    const {
        full_name,
        image : {
            url
        },
        _id
    } = props;
    return (
        <Link to={`${CHEFS}/${_id}`}>
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
        </Link>
    )
}

export default ChefCard;
