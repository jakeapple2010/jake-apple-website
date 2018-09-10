import React, { Component } from 'react'
import './profile.css'
import * as GitHubLogo from './content/GitHub_Logo_White.png'

export default class about extends Component {
    render() {
        return (
            <div className="component-wrapper" id={this.props.id} key={this.props.id}>
                <div className="component-content" >
                    <div className="component-heading">
                        <h2>Profile</h2>
                        <div>Full stack developer</div>
                    </div>
                    <div className="self-description">
                        <h3>About me</h3>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse et sem id purus volutpat vestibulum nec ac eros. 
                            Proin ullamcorper quis mi a scelerisque. Maecenas tempus 
                            efficitur convallis.
                        </div>
                    </div>
                    <div className="horizontal-align">
                        <img className="profile-picture-img" src="https://s.gravatar.com/avatar/28f1a06272000ef136be2912ae39ef94?s=250"/>
                    </div>
                    <div className="details">
                        <h3>Details</h3>
                        <div className="description">
                            <p><strong>Name:</strong> Jake Apple</p>
                            <br/>
                            <p><strong>Age:</strong> 24</p>
                            <br/>
                            <p><strong>Location:</strong> Utah, United States</p>
                            <br/>
                            <p className="vertical-align gitHubLink">
                                <strong>
                                    Codes: 
                                </strong>
                                <a className="vertical-align" href='https://github.com/jakeapple2010'>
                                    <img id='link' src={GitHubLogo} alt='GitHub link'/>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}