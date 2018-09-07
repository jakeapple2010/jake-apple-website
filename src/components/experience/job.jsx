import * as React from 'react';

export default function Job(params) {
    return(
        <div className="flex-row"> 
            <div className="flex">
                <div className="job">
                    <div className="job-title">{params.jobTitle}</div>
                    <div className="sub-title">{params.jobRange}</div>
                </div>
                <div className="job-description">
                    <div className="job-description-title">{params.positionTitle}</div>
                    <div className="job-description-body">{params.positionDescription}</div>
                </div> 
            </div>
        </div>
    )
}