import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faReact} size="lg" /> React Play</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link disabled" href="https://github.com/richpeers/react-play"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/" aria-disabled="true">Tech Quiz</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/" aria-disabled="true">Mine Sweeper</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="/" aria-disabled="true">Calculator</a>
                </li>
            </ul>
        </nav>
    );
}