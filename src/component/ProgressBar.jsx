import React from 'react';

export default function ProgressBar(props) {
	return (
		<>
			<h5>{props.skill}</h5>
			<div
				className='flex mt-1 mb-2 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden'
				role='progressbar'
				aria-valuenow={25}
				aria-valuemin={0}
				aria-valuemax={100}
			>
				<div
					className={`flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500`}
					style={{ width: `${props.value}%` }}
				/>
			</div>
		</>
	);
}
