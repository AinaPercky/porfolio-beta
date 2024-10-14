import React from 'react'
import { FaCode, FaServer, FaBug, FaChartLine, FaDatabase, FaProjectDiagram } from 'react-icons/fa';

export default function ServiceCard(props) {
    const Icon = props.icon;
    return (
        <div className=''>
            <div className="service-item position-relative">
                <div className="icon">
                    <Icon/>
                </div>
                <a href="#" className="stretched-link">
                    <h3>{props.title}</h3>
                </a>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
