import React from 'react'
import ResumeItem from './ResumeItem'


export default function Resume() {
    return (
        <section id="resume" className="resume section pl-20 pr-20">
            {/* Section Title */}
            <div className="container section-title aos-init aos-animate " data-aos="fade-up">
                <h2>Resume</h2>
            </div>
            {/* End Section Title */}
            <div className="flex aos-init aos-animate">
                <div className='ResumeItemLeft w-1/2'>
                    <div className=" aos-init aos-animate " >
                        <h3 className="resume-title">Sumary</h3>
                        <ResumeItem></ResumeItem>
                    </div>
                    <div className=" aos-init aos-animate " >
                        <h3 className="resume-title">Education</h3>
                        <ResumeItem></ResumeItem>
                        <ResumeItem></ResumeItem>
                    </div>
                </div>
                <div className='ResumeItemLeft w-1/2'>
                    <div className=" aos-init aos-animate " >
                        <h3 className="resume-title">Experience</h3>
                        <ResumeItem></ResumeItem>
                        <ResumeItem></ResumeItem>
                        <ResumeItem></ResumeItem>
                    </div>
                </div>
            </div>


    </section>
    )
}
