import React, { Component } from 'react'
import './about.css'

export default class about extends Component {
    render() {
        return (
            <div className="about-body" id={this.props.id} key={this.props.id}>
                <div className="about wrapper" >
                    <div className="profile-heading heading">
                        <h2>Profile</h2>
                        <div className="sub-heading heading">
                            Full stack developer
                        </div>
                    </div>
                    <div className="self-description">
                        <h3 className="self-description-title heading">
                            About me
                        </h3>
                        <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse et sem id purus volutpat vestibulum nec ac eros. 
                        Proin ullamcorper quis mi a scelerisque. Maecenas tempus 
                        efficitur convallis. Vestibulum ante ipsum primis in faucibus 
                        orci luctus et ultrices posuere cubilia Curae; Cras et lectus s
                        ed turpis ornare gravida vel vitae magna. Nunc in orci elit. 
                        </div>
                    </div>
                    <div className="profile-picture">
                        <img src="https://s.gravatar.com/avatar/28f1a06272000ef136be2912ae39ef94?s=250"/>
                    </div>
                    <div className="details">
                        <h3 className="self-description-title heading">
                            Details
                        </h3>
                        <div className="description">
                            <p><strong>Name:</strong> Jake Apple</p>
                            <br/>
                            <p><strong>Age:</strong> 24</p>
                            <br/>
                            <p><strong>Location:</strong> Utah, United States</p>
                            <br/>
                            <p><strong>Github:</strong> button goes here</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}