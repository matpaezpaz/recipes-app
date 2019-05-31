import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import ReactMarkdown from 'react-markdown';

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
            <React.Fragment>
                {this.props.loading ? <p>CARGANDING</p> :
                    <div>
                        <h1>Tenemos {this.props.recipes.length} recetas</h1>
                        {this.props.recipes.map(recipe => {
                            return <ReactMarkdown key={recipe._id} source={recipe.instructions} />
                        })}
                    </div>
                }
            </React.Fragment>
        )
    }

}

export default connect(mapStateToProps, null) (Recipes);