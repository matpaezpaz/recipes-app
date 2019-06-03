import React from 'react';
import './style.scss';

const ChefInfo = (props) => {
    const {
        full_name,
        bio,
        image
    } = props;
    return ( 
        <div className="chef-info">
            <figure className="chef-info__picture">
                <img src={image.url}  alt={`${full_name}`}/>
            </figure>
            <section className="chef-info__body">
                <header className="chef-info__body__title">
                    <h1>
                        {full_name}
                    </h1>
                </header>
                <article className="chef-info__body__bio">
                    {bio}
                </article>
            </section>
        </div>
    )
}

export default ChefInfo;