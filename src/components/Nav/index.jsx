import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { RECIPES, HOME, CHEFS } from '../../routes';


const Nav = () =>{
    return (
        <nav className="nav">
            <div className="container">
                <div className="main-nav">
                    <div className="main-nav__brand">
                        <Link to={HOME}>
                            Hell's Kitchen
                        </Link>
                    </div>
                    <div className="main-nav__links">
                        <ul>
                            <li>
                                <Link to={CHEFS}>
                                    Chefs
                                </Link>
                            </li>
                            <li>
                                <Link to={RECIPES}>
                                    Recipes
                                </Link>
                            </li>
                            <li>
                                Ingredients
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;