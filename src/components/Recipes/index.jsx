import React from 'react';
import { connect } from 'react-redux';
import { getRecipeById, getRecipes } from '../../redux/actions';
import RecipeSection from '../RecipeSection';
import './style.scss';
import Loading from '../Loading';
import RecipeInfo from './RecipeInfo';


const mapStateToProps = (state) => ({
    loading: state.recipes.isRecipeLoading === true,
    loadingRecipes: state.recipes.isRecipesLoading === true,
    recipe: state.recipes.recipe,
    recipes: state.recipes.recipes

});

class Recipes extends React.Component {
    componentWillMount() {
        const idRecipe = this.props.match.params.idRecipe;
        if (idRecipe) {
            this.props.dispatch(getRecipeById(idRecipe));
        }
        this.props.dispatch(getRecipes());
    }    
    
    componentDidUpdate(previousProps){
        const currentId = this.props.match.params.idRecipe;
        const previousId = previousProps.match.params.idRecipe;
        if(currentId !== previousId) {
            this.props.dispatch(getRecipeById(currentId));
        }
    }

    render() {
        const idRecipe = this.props.match.params.idRecipe;
        return (
            <div className="container">
                {   idRecipe !== undefined ?
                    this.props.loading ? <Loading/> :
                    <RecipeInfo {...this.props.recipe} />
                    : ''
                }
                <section className="other-recipes">
                    <header className="other-recipes__header">
                        <h1>
                            {
                                idRecipe ? 'Other recipes' : 'Our recipes'
                            }
                        </h1>
                    </header>
                    <RecipeSection recipes={this.props.recipes} loading={this.props.loadingRecipes} />
                </section>
            </div>
        )
    }

}

export default connect(mapStateToProps, null) (Recipes);