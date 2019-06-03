import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import ReactMarkdown from 'react-markdown';
import RecipeSection from '../RecipeSection';

const mapStateToProps = (state) => ({
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class Recipes extends React.Component {
    componentWillMount() {
        this.props.dispatch(getRecipes());
    }    

    render() {
        return (
            <div className="container">
                <section>
                    <RecipeSection />
                </section>
                {this.props.loading ? <p>CARGANDING</p> :
                    <div>
                        <h1>Tenemos {this.props.recipes.length} recetas</h1>
                        {this.props.recipes.map(recipe => {
                            return <ReactMarkdown key={recipe._id} source={recipe.instructions} />
                        })}
                    </div>
                }
            </div>
        )
    }

}

export default connect(mapStateToProps, null) (Recipes);