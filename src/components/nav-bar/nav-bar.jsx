import React, { Component, ReactDOM } from 'react'
import { Link } from 'react-router-dom'

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ...props
        }
    }
    

    handleLinkClick = (event, clickedPage) => {
        event.preventDefault();

        this.props.toggleNav();
        this.props.setCurrentPage(clickedPage);
        this.props.scrollTo(clickedPage);
    }

    render() {
        var sideNavClassName = "top-nav " + (this.props.clicked === true ? "clicked" : "hidden flex-column");
        let links = this.state.pages.map(x => 
            <Link 
                to={"/" + x}  
                onClick={(e) => this.handleLinkClick(e, x)} 
                id={x === this.props.currentPage ? "active" : null}
                key={x}
            >
                {x}
            </Link>
        );

        return (
            <div className={sideNavClassName}>
                <div className="links flex-column">
                    {links}
                </div>
            </div>
        );
    }
}

export default TopNav;
