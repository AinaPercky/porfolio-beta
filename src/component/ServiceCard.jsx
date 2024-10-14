import React from 'react'

export default function ServiceCard(props) {
    return (
        <div className='w-1/3'>
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-easel" />
                </div>
                <a href="#" className="stretched-link">
                    <h3>{props.title}</h3>
                </a>
                <p>{props.content}</p>
            </div>
        </div>
            
    )
}
