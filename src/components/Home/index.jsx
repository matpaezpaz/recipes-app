import React from 'react';

import RecipeSection from '../RecipeSection';

import './style.scss';
import ChefSection from '../ChefSection';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <section className="home-section">
                    <header className="home-section__header">
                        <h1>
                            Latest Recipes
                        </h1>
                    </header>
                    <RecipeSection />
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

export default Home;