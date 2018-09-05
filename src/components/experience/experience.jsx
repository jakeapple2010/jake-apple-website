import * as React from 'react'
import './experience.css'

export default function experience(props){
    return (
        <div className="component-wrapper experience" id={props.id} key={props.id}>
            <div className="component-content experience">
                <div className="profile-heading">
                    <h2>Experience</h2>
                </div>
                <div className="flex-row"> 
                    <div className="flex">
                        <div className="job">
                            <div className="job-title">Pluralsight</div>
                            <div className="sub-title">Apr 2017 - Present</div>
                        </div>
                        <div className="job-description">column 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}