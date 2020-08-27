import React, { useContext } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import { AuthProvider, AuthContext } from './context'
import { LoginPage, HomePage } from './pages'

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path='/' component={LoginPage} />
					<PrivateRoute exact path='/home' component={HomePage} />
				</Switch>
			</Router>
		</AuthProvider>
	)
}

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const { currentUser } = useContext(AuthContext)
	return (
		<Route
			{...rest}
			render={(routeProps) =>
				!!currentUser ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to={'/'} />
				)
			}
		/>
	)
}

export default App
