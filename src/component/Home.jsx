import React from 'react'
import { TypeAnimation } from 'react-type-animation'


export const Home = () => {
    return (
        <div>
                <section id="hero" className="hero section dark-background">
                    <img src="/img/hero-img.jpg"  alt="" data-aos="fade-in"/>
                        <div className="relative flex flex-col justify-center z-10" data-aos="fade-up" data-aos-delay="100">
                            <h2 className=''>I am Percky RAMANOARA</h2>
                            <p className='flex justify-center'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Developer front end',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Developer back end',
                                    1000,
                                    'Website optimizer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                            </p>
                        </div>
                </section>
        </div>
    )
}
