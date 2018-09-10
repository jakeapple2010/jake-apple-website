import * as React from 'react'
import Job from './job'
import './experience.css'

export default function experience(props){
    let pluralsightDescription = `Currently working to answer the questions: "Who are you" and "What can you do" along with providing an offer redemption process and a method for other bounded contexts to slowly roll features out for general release.`;
    let stayWellDescription = `Created a system-wide framework to assist with testing web applications. Worked to migrate an existing monolithic test suite into relative bounded contexts.`;
    let healthEquityDescription = `Worked on a rules engine to process HSA contributions. Built a process to true-up inconsistent user data in order to produce accurate tax forms. Worked to create an in-house HSA investing advisor replacement for an existing paid for solution.`;
    let masteryConnectDescription = `Created a set of testing utilities that helped automate existing manual testing processes.`;
    let storageCraftDescription = `Worked on a networking solution for windows server backups being spun up in the cloud as part of a DR scenario.`;
    return (
        <div className="component-wrapper experience" id={props.id} key={props.id}>
            <div className="component-content experience">
                <div className="component-heading">
                    <h2>Experience</h2>
                </div>
                <Job jobTitle="Pluralsight" jobRange={"Apr 2017-Present"} positionTitle={"Software Craftsman"} positionDescription={pluralsightDescription} />
                <Job jobTitle="StayWell" jobRange={"Dec 2016-Apr 2017"} positionTitle={"Senior Developer in Test"} positionDescription={stayWellDescription} />
                <Job jobTitle="HealthEquity" jobRange={"Aug 2014-Dec 2016"} positionTitle={"Software Engineer"} positionDescription={healthEquityDescription} />
                <Job jobTitle="MasteryConnect" jobRange={"Nov 2013-Dec 2013"} positionTitle={"QA Engineer"} positionDescription={masteryConnectDescription} />
                <Job jobTitle="StorageCraft" jobRange={"May 2011-Oct 2013"} positionTitle={"QA Engineer"} positionDescription={storageCraftDescription} />
            </div>
        </div>
    )
}