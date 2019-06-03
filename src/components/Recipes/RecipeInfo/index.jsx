import React from 'react';
import ReactMarkdown from 'react-markdown';
import Rating from '../../Rating';
import './style.scss'
import { dateToDDMMYYYY } from "../../../utils";
import { CHEFS } from '../../../routes';
import { Link } from "react-router-dom";

const RecipeInfo = ({
    instructions,
    title,
    prep_time,
    rating,
    createdAt,
    main_image,
    chef
}) => {
    return (
        <div className="recipe-info">
            <figure className="recipe-info__figure">
                <img src={main_image.url} alt="Delicious"/>
            </figure>
            <section className="recipe-info__description">
                <header className="recipe-info__descripction__title">
                    <h1>
                        {title}
                    </h1>
                </header>
                <article className="recipe-info__description__body">
                    <section className="recipe-info__description__body__info">
                        <span>
                            {prep_time}
                        </span>
                        <span>
                            <Rating rating={rating}/>
                        </span>
                        <span>
                            Uploaded: {dateToDDMMYYYY(new Date(createdAt)) }
                        </span>
                        <span>
                            <Link to={`${CHEFS}/${chef._id}`}>
                                Chef : {chef.full_name}
                            </Link>
                        </span>
                    </section>
                    <ReactMarkdown source={instructions} />
                </article>
            </section>
        </div>
    )
}

export default RecipeInfo;