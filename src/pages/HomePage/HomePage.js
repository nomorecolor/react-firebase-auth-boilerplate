import React from 'react'
import { firebaseApp } from '../../context'

export const HomePage = () => {
	const handleSignOut = () => {
		firebaseApp.auth().signOut()
	}

	return (
		<div className='container vh-100'>
			<div className='row h-100 w-100 mx-auto justify-content-center align-items-center'>
				<div className='col-lg-6 col-md-8 col-sm-12 col-12'>
					<div class='shadow bg-white rounded h-auto w-100 p-5'>
						<div className='row'>
							<button
								type='button'
								className='btn btn-outline-dark mx-auto d-block w-100'
								onClick={() => handleSignOut()}
							>
								<i className='fas fa-sign-out-alt mr-3'></i>
								Sign out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
