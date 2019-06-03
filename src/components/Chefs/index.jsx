import React from 'react';
import { connect } from 'react-redux';
import { getChefById, getChefs } from '../../redux/actions';
import './style.scss';
import Loading from '../Loading';
import ChefSection from '../ChefSection';
import ChefInfo from './ChefInfo';
import RecipeSection from '../RecipeSection';


const mapStateToProps = (state) => ({
    loading: state.chefs.isChefLoading === true,
    loadingChefs: state.chefs.isChefsLoading === true,
    chef: state.chefs.chef,
    chefs: state.chefs.chefs

});

class Recipes extends React.Component {
    componentWillMount() {
        const idChef = this.props.match.params.idChef;
        if (idChef) {
            this.props.dispatch(getChefById(idChef));
        }
        this.props.dispatch(getChefs());
    }

    componentDidUpdate(previousProps) {
        const currentId = this.props.match.params.idChef;
        const previousId = previousProps.match.params.idChef;
        if (currentId !== previousId) {
            this.props.dispatch(getChefById(currentId));
        }
    }

    render() {
        const idChef = this.props.match.params.idChef;
        console.log(this.props.chef.recipes)
        return (
            <div className="container">
                {idChef !== undefined ?
                    this.props.loading ? <Loading /> : <ChefInfo {...this.props.chef} />: ''
                }
                {idChef !== undefined ?
                    this.props.loading ? <Loading /> : 
                        <section className="chefs-recipes">
                            <header>
                                <h1>Recipes made by {this.props.chef.full_name}</h1>
                            </header>
                            <RecipeSection recipes={this.props.chef.recipes} loading={false} />
                        </section>
                    : ''
                }
                <section className="other-chefs">
                    <header className="other-chefs__header">
                        <h1>
                            {
                                idChef ? 'Other chefs' : 'Our Chefs'
                            }
                        </h1>
                    </header>
                    <ChefSection chefs={this.props.chefs} loading={this.props.loadingChefs} />
                </section>
            </div>
        )
    }

}

export default connect(mapStateToProps, null)(Recipes);