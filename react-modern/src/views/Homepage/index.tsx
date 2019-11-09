import React from "react"
import { RouteComponentProps } from "react-router"
import Helmet from "react-helmet"
import { observer } from "mobx-react"

import "styles/views/homepage"

import Header from "components/Header"
import Section1 from "./homepage-sections/Section1"
import Section2 from "./homepage-sections/Section2"
import Section3 from "./homepage-sections/Section3"
import Section4 from "./homepage-sections/Section4"
import Section5 from "./homepage-sections/Section5"
import Section6 from "./homepage-sections/Section6"

export interface HomepageProps extends RouteComponentProps<any> {}
export interface HomepageState {}

@observer
export default
class Homepage
extends React.Component<HomepageProps, HomepageState> {
	render() {
		var title = "Modern"
		return <>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Header />
			<main className="v-homepage">
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
			</main>
		</>
	}
}