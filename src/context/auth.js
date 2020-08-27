import React, { useEffect, useState } from 'react'
import { firebaseApp } from './'
import { Splash } from '../components'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((user) => {
			setCurrentUser(user)
			setLoading(false)
		})
	}, [])

	if (loading) {
		return <Splash />
	}

	return (
		<AuthContext.Provider
			value={{
				currentUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
