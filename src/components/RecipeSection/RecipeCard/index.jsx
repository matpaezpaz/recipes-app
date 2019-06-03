import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { RECIPES } from '../../../routes';
import Rating from '../../Rating';

const RecipeCard = (props) => {
    const {
        title,
        main_image : {
            url
        },
        chef : {
            full_name,
            image : {
                url : chef_image
            },
        },
        prep_time,
        rating,
        _id
    } = props;
    return (
        <div className="card-recipe">
            <header className="card-recipe__header">
                <Link to={`${RECIPES}/${_id}`}>
                    <figure>
                        <img src={url} alt=""/>
                    </figure>
                </Link>
                <h1>
                    {title} 
                </h1>
            </header>
            <section className="card-recipe__info">
                <article>
                    {prep_time}
                </article>
                <article>
                    <Rating rating={rating} />
                </article>
            </section>
            <section className="card-recipe__chef">
                <figure className="card-recipe__chef__chef-picture">
                    <img src={chef_image} alt=""/>
                </figure>
                <article className="card-recipe__chef__chef-info">
                    <h1>
                        {full_name}
                    </h1>
                </article>
            </section>
        </div>
    )
}

export default RecipeCard;