import * as React from 'react'
import Job from './job'
import './experience.css'

export default function experience(props){
    return (
        <div className="component-wrapper experience" id={props.id} key={props.id}>
            <div className="component-content experience">
                <div className="component-heading">
                    <h2>Experience</h2>
                </div>
                <Job jobTitle="Pluralsight" jobRange={"Apr 2017-Present"} positionTitle={"Software Craftsman"} positionDescription={"write the codes"} />
            </div>
        </div>
    )
}