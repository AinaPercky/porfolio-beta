import React from 'react'

export default function ResumeTitle(props) {
    return (
        <div className=" aos-init aos-animate " >
            <h3 className="resume-title">{props.resumeTitle}</h3>
            {props.children}
        </div>
    )
}
