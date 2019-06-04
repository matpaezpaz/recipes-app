import React from 'react';
import './style.scss';


const IngredientCard = (ingredient) => {
    const {
        name
    } = ingredient;
    return (
        <div className="ingredient-card">
            <h1>
                {name}
            </h1>
        </div>
    )
}

export default IngredientCard;