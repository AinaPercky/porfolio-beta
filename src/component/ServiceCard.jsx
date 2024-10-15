import React from 'react'
import { FaCode, FaServer, FaBug, FaChartLine, FaDatabase, FaProjectDiagram } from 'react-icons/fa';

export default function ServiceCard(props) {
    const Icon = props.icon;
    return (
        <div className='group perspective-1000'>
            
            <div className='relative w-full h-full duration-700 transform-style-3d group-hover:rotate-y-180'>
                {/* face avant*/}
                
                <div className="service-item absolute w-full h-full backface-hidden">
                    <div className='service-item'>
                        <div className="icon">
                            <Icon/>
                        </div>
                        <a href="#" className="stretched-link">
                            <h3>{props.title}</h3>
                        </a>
                        <p>{props.content}</p>
                    </div>
                        
                
                </div>
                {/* face arrière*/}
                <div className=" absolute w-full h-full backface-hidden rotate-y-180">
                    <div className='service-item'>
                        <div className="icon">
                            <Icon/>
                        </div>
                    </div>
                    
                </div>
                {/* face arrière*/}
            </div>

            

        </div>
    )
}
