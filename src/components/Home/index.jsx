import React from 'react';
import RecipeSection from '../RecipeSection';
import './style.scss';
import ChefSection from '../ChefSection';
import { getRecipes } from '../../redux/actions';
import { connect } from 'react-redux';

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
                <section className="home-section">
                    <header className="home-section__header">
                        <h1>
                            Latest Recipes
                        </h1>
                    </header>
                    <RecipeSection recipes={this.props.recipes} loading={this.props.loading}/>
                </section>
                <section className="home-section">
                    <header className="home-section__header">
                        <h1>
                            Latest Chefs
                        </h1>
                    </header>
                    <ChefSection />
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(Home);