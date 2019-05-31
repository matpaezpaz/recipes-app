import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import CardRecipe from '../CardRecipe';

import './style.scss';
import Loading from '../Loading';

const mapStateToProps = (state) => ({
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(getRecipes());
    }

    render() {
        return (
            <div className="container">
                <section className="latest-recipes">
                    <header className="latest-recipes__header">
                        <h1>
                            Latest Recipes
                        </h1>
                    </header>
                    <article className="latest-recipes__recipes">
                        {
                            this.props.loading ? (<Loading/>) :
                            this.props.recipes ? this.props.recipes.map( recipe => <CardRecipe key={recipe.id} {...recipe} /> ) : 'No recipes'
                        }
                    </article>
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(Home);