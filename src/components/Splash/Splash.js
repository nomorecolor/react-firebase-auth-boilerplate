import React from 'react'

export const Splash = () => {
	return (
		<div className='row vh-100 mx-auto justify-content-center align-items-center'>
			<span className='fa-stack fa-2x'>
				<i className='fas fa-circle fa-stack-2x'></i>
				<i
					className='fas fa-rocket fa-spin fa-stack-1x'
					style={{ color: 'white' }}
				></i>
			</span>
		</div>
	)
}
