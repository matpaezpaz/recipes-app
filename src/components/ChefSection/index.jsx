import React, { Component } from 'react'
import Loading from '../Loading';
import ChefCard from './ChefCard';


const  ChefSection = ({chefs,loading}) => {
    return (
        <div className="chef-section">
            {
                loading ? (<Loading />) :
                    chefs ? chefs.map(chef => <ChefCard key={chef.id} {...chef} />) : 'No chefs'
            }
        </div>
    )
}

export default ChefSection;