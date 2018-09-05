import React from 'react';
import './nav.css'

const HamburgerMenu = (props) => {
    
    let className = props.clicked === true ? "clicked" : "not-clicked";
    return (
        <div>
            <div className={"hamburger-container " + className} onClick={props.toggleNav}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </div>
    )
    
}

export default HamburgerMenu;