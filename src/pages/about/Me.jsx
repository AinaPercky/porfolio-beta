import React from 'react'
import AboutInfo from '../../component/AboutInfo'
import AboutSkills from '../../component/AboutSkills'
import AboutContent from '../../component/AboutContent'
import '../../assets/css/header.css'

export default function Me() {
  return (
    <section id="about" className="about section ml-20 mr-20">
        <div className="container">
            <div className='cardAboutContainer grid grid-cols-2 gap-4'>
                <div className='cardAboutContainerLeft animate_element'>
                    <AboutInfo></AboutInfo>
                    <AboutSkills></AboutSkills>
                </div>
                <div className='cardAboutContainerRigth animate_element_2'>
                    <AboutContent></AboutContent>
                </div>
            </div>
        </div>
    </section>
  )
}
