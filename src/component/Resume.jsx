import React from 'react'
import ResumeTitle from './ResumeTitle'
import ResumeItem from './ResumeItem'
import { resumeEducation } from '../utils/resumeEducation'
import { resumeExperience } from '../utils/resumeExperience'


export default function Resume() {
    console.log(resumeEducation)
    return (
        
        <section id="resume" className="resume section pl-20 pr-20">
            {/* Section Title */}
            <div className="container section-title aos-init aos-animate " data-aos="fade-up">
                <h2>Resume</h2>
            </div>
            {/* End Section Title */}
            <div className="flex aos-init aos-animate">
                <div className='ResumeItemLeft w-1/2'>
                    {
                        resumeEducation && resumeEducation.map((item,index) => (
                            <ResumeTitle key={index} resumeTitle={item.resumeTitle}>
                                <ResumeItem 
                                    resumeSubTitle={item.resumeSubTitle}
                                    period={item.period} 
                                    adress={item.adress}
                                    description={item.description} 
                                    tasks={item.tasks}/>
                            </ResumeTitle>
                        ))
                    }
                </div>
                <div className='ResumeItemLeft w-1/2'>
                {
                    resumeExperience && resumeExperience.map((item,index) => (
                        <ResumeTitle key={index} resumeTitle={item.resumeTitle}>
                            <ResumeItem 
                                resumeSubTitle={item.resumeSubTitle}
                                period={item.period} 
                                adress={item.adress}
                                description={item.description} 
                                tasks={item.tasks}/>
                        </ResumeTitle>
                    ))
                    }
                </div>
            </div>


    </section>
    )
}
