import React from 'react'
import './name.css'

export default function nameComponent(props) {
    return (
        <div className="name" id={props.id} key={props.id}>
            <div className="component-content horizontal-align">
                Jake Apple
            </div>
        </div>
    )
} 