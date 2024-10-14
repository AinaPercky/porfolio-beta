import React from 'react'
import ServiceCard from './ServiceCard'


export default function Services() {
    return (
        <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
            <h2>Services</h2>
        </div>{/* End Section Title */}
        <div className="container px-16">
            <div className='flex gap-10'>
                <ServiceCard 
                    title="Front end development" 
                    content="lorem ip">
                </ServiceCard>
                <ServiceCard 
                    title="Back end development" 
                    content="lorem ip">
                </ServiceCard>
                <ServiceCard 
                    title="Debugging" 
                    content="lorem ip">
                </ServiceCard>
            </div>
        </div>
        </section>
    )
}
