import React from 'react';
import RecipeSection from '../RecipeSection';
import './style.scss';
import ChefSection from '../ChefSection';
import { getRecipes , getChefs } from '../../redux/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    recipesloading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes,
    chefs: state.chefs.chefs,
    chefsLoading: state.recipes.isChefsLoading === true,
});



class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(getRecipes());
        this.props.dispatch(getChefs());
        console.log(this.props.chefs);
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
                    <RecipeSection recipes={this.props.recipes} loading={this.props.recipesloading}/>
                </section>
                <section className="home-section">
                    <header className="home-section__header">
                        <h1>
                            Latest Chefs
                        </h1>
                    </header>
                    <ChefSection chefs={this.props.chefs} loading={this.props.chefsLoading} />
                </section>
            </div>
        )
    }
}

export default connect(mapStateToProps,null)(Home);