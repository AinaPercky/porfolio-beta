import React from 'react';

export default function ResumeItem(props) {
	return (
		<div className='resume-item pb-0'>
			<h4>{props.resumeSubTitle}</h4>
			{props.period ? <h5>{props.period}</h5> : null}
			{props.adress ? (
				<p className='mb-3'>
					<em>{props.adress}</em>
				</p>
			) : null}
			{props.description ? <p>{props.description}</p> : null}
			{props.tasks ? (
				<ul className='list-disc'>
					{props.tasks.map((item, index) => (
						<li key={index}>{item.task}</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
