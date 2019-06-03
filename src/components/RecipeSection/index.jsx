import React from 'react'
import './style.scss';
import Loading from '../Loading';
import CardRecipe from '../CardRecipe';
const RecipeSection = ({recipes,loading}) => {
    return (
        <div className="recipe-section">
            {
                loading ? (<Loading />) :
                    recipes ? recipes.map(recipe => <CardRecipe key={recipe.id} {...recipe} />) : 'No recipes'
            }
        </div>
    )
}

export default RecipeSection;