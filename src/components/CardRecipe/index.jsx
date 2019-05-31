import React from 'react';

const CardRecipe = ({title}) => {
    return (
        <div className="card-recipe">
            <header>
                <h1>
                    {title}
                </h1>
            </header>
        </div>
    )
}

export default CardRecipe;