import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <NavLink to="/" className="navbar-brand" >
                <FontAwesomeIcon icon={faReact} size="lg" /> React Play
            </NavLink>
            <ul className="navbar-nav">
                <NavLink to="/tech-quiz" className="nav-link" >Tech Quiz</NavLink>
                <NavLink to="/minesweeper" className="nav-link" >Minesweeper</NavLink>
                <NavLink to="/calculator" className="nav-link" >Calculator</NavLink>
                <a className="nav-link" href="https://github.com/richpeers/react-play">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
            </ul>
        </nav>
    );
}

export default TopNav;