import React from 'react';
import './style.scss';


const CardRecipe = (props) => {
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
            bio : chef_info
        }
    } = props;
    return (
        <div className="card-recipe">
            <header className="card-recipe__header">
                <figure>
                    <img src={url} alt=""/>
                </figure>
                <h1>
                    {title}
                </h1>
            </header>
            <section className="card-recipe__body">
                <figure className="card-recipe__body__chef-picture">
                    <img src={chef_image} alt=""/>
                </figure>
                <article className="card-recipe__body__chef-info">
                    <h1>
                        {full_name}
                    </h1>
                    <p>
                        {chef_info}
                    </p>
                </article>
            </section>
        </div>
    )
}

export default CardRecipe;