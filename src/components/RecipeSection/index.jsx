import React, { Component } from 'react'
import { connect } from 'react-redux';
import './style.scss';
import Loading from '../Loading';
import CardRecipe from '../CardRecipe';
import { getRecipes } from '../../redux/actions';

const mapStateToProps = (state) => ({
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class RecipeSection extends Component {
    componentDidMount() {
        this.props.dispatch(getRecipes());
    }
    render() {
        return (
            <div className="recipe-section">
                {
                    this.props.loading ? (<Loading />) :
                        this.props.recipes ? this.props.recipes.map(recipe => <CardRecipe key={recipe.id} {...recipe} />) : 'No recipes'
                }
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(RecipeSection);