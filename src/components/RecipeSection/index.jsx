import React from 'react'
import './style.scss';
import Loading from '../Loading';
import RecipeCard from './RecipeCard';
const RecipeSection = ({recipes,loading}) => {
    return (
        <div className="recipe-section">
            {
                loading ? (<Loading />) :
                    recipes ? recipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />) : 'No recipes'
            }
        </div>
    )
}

export default RecipeSection;