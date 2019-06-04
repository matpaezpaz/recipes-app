import React from 'react'
import Loading from '../Loading';
import IngredientCard from './IngredientCard';
import './style.scss'

const IngredientSection = ({ ingredients, loading }) => {
    return (
        <div className="ingredient-section">
            {
                loading ? (<Loading />) :
                    ingredients ? ingredients.map(ingredient => <IngredientCard key={ingredient.id} {...ingredient} />) : 'No ingredients'
            }
        </div>
    )
}

export default IngredientSection;