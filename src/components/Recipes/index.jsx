import React from 'react';
import { connect } from 'react-redux';
import { getRecipeById, getRecipes } from '../../redux/actions';
import ReactMarkdown from 'react-markdown';
import RecipeSection from '../RecipeSection';
import './style.scss';


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
        const {
            instructions,
            title,
            prep_time,
            rating,
            createdAt
        } = this.props.recipe;
        const idRecipe = this.props.match.params.idRecipe;
        return (
            <div className="container">
                {   idRecipe !== undefined ?
                    this.props.loading ? <p>CARGANDING</p> :
                    <section className="recipe-description">
                        <header className="recipe-descripction__title">
                            <h1>
                                {title}
                            </h1>
                        </header>
                        <article className="recipe-description__body">
                            <section className="recipe-description__body__info">
                                {prep_time} - {rating} - {createdAt}
                            </section>
                            <ReactMarkdown source={instructions} />
                        </article>
                    </section>
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