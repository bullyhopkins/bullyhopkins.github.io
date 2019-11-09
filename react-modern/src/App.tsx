import React from "react"
import { RouteComponentProps, Switch, Route, Redirect } from "react-router-dom"

import "styles/fonts"
import "styles/main"
import "styles/universal"

import Homepage from "views/Homepage"

export interface ApplicationProps extends RouteComponentProps<any> {
	locale: string
}
export interface ApplicationState {}

export default
class Application
extends React.Component<ApplicationProps, ApplicationState> {

	componentDidUpdate(prevProps: ApplicationProps) {
		if (this.props.location.pathname != prevProps.location.pathname) {
			window.scrollTo(0, 0)
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}
	}

	render() {
		return <>
			<Switch>
				<Route
					path="/"
					exact
					component={Homepage}
				/>
				<Redirect to="/not-found" />
			</Switch>
		</>
	}
}