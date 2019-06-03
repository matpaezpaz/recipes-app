import React from 'react';
import { connect } from 'react-redux';
import { getChefById, getChefs } from '../../redux/actions';
import ReactMarkdown from 'react-markdown';
import RecipeSection from '../RecipeSection';
import './style.scss';
import Loading from '../Loading';
import ChefSection from '../ChefSection';


const mapStateToProps = (state) => ({
    loading: state.chefs.isChefLoading === true,
    loadingChefs: state.chefs.isChefsLoading === true,
    chef: state.chefs.chef,
    chefs: state.chefs.chefs

});

class Recipes extends React.Component {
    componentWillMount() {
        const idChef = this.props.match.params.idChef;
        this.props.dispatch(getChefById(idChef));
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
        const {
            instructions,
            title,
            prep_time,
            rating,
            createdAt
        } = this.props.chef;
        const idChef = this.props.match.params.idChef;
        return (
            <div className="container">
                {idChef !== undefined ?
                    this.props.loading ? <Loading /> :
                        <section className="chef-description">
                            <header className="chef-description__title">
                                <h1>
                                    {title}
                                </h1>
                            </header>
                            <article className="chef-description__body">
                                <section className="chef-description__body__info">
                                    {prep_time} - {rating} - {createdAt}
                                </section>
                                <ReactMarkdown source={instructions} />
                            </article>
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