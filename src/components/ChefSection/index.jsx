import React, { Component } from 'react'
import { connect } from 'react-redux';
//import './style.scss';
import Loading from '../Loading';
import {  getChefs } from '../../redux/actions';
import ChefCard from './ChefCard';

const mapStateToProps = (state) => ({
    loading: state.chefs.isChefsLoading === true,
    chefs: state.chefs.chefs
});

class ChefSection extends Component {
    componentDidMount() {
        this.props.dispatch(getChefs());
    }
    render() {
        console.log(this.props)
        return (
            <div className="chef-section">
                {
                    this.props.loading ? (<Loading />) :
                        this.props.chefs ? this.props.chefs.map(chef => <ChefCard key={chef.id} {...chef} />) : 'No chefs'
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(ChefSection);