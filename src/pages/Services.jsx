import React from 'react';
import ServiceCard from '../component/ServiceCard';
import { dataSercice } from '../utils/services';

export default function Services() {
	return (
		<section id='services' className='services section'>
			{/* Section Title */}
			<div
				className='container section-title aos-init aos-animate'
				data-aos='fade-up'
			>
				<h2>Services</h2>
			</div>
			{/* End Section Title */}
			<div className='container px-16'>
				<div className='grid grid-cols-3 gap-10'>
					{dataSercice.map((item) => (
						<ServiceCard
							title={item.title}
							content={item.content}
							icon={item.icon}
						></ServiceCard>
					))}
				</div>
			</div>
		</section>
	);
}
