import React, { useContext } from 'react'
import { AuthContext, firebaseApp, firebaseAuth } from '../../context'
import { Redirect } from 'react-router-dom'

export const LoginPage = () => {
	const handleSignInWithGoogle = () => {
		const provider = new firebaseAuth.GoogleAuthProvider()

		firebaseApp.auth().signInWithPopup(provider)
	}

	const handleSignInWithFacebook = () => {
		const provider = new firebaseAuth.FacebookAuthProvider()

		firebaseApp.auth().signInWithPopup(provider)
	}

	const { currentUser } = useContext(AuthContext)

	if (currentUser) {
		return <Redirect to='/home' />
	}

	return (
		<div className='container vh-100'>
			<div className='row h-100 w-100 mx-auto justify-content-center align-items-center'>
				<div className='col-lg-6 col-md-8 col-sm-12 col-12'>
					<div class='shadow bg-white rounded h-auto w-100 p-5'>
						<div className='row mb-2'>
							<button
								type='button'
								className='btn btn-outline-dark mx-auto d-block w-100'
								onClick={() => handleSignInWithGoogle()}
							>
								<i className='fab fa-google mr-3' />
								Sign in with Google
							</button>
						</div>
						<div className='row'>
							<button
								type='button'
								className='btn btn-outline-dark mx-auto d-block w-100'
								onClick={() => handleSignInWithFacebook()}
							>
								<i className='fab fa-facebook-square mr-3' />
								Sign in with Facebook
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
