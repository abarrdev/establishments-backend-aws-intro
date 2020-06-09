import React, { Component } from 'react'
import { listEstablishments } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayEstablishments extends Component {

	constructor() {
		super()
		this.state = {
			establishments: []
		}
	}

	componentDidMount = async () => {
		this.getEstablishments()
	}

	getEstablishments = async () => {
		const result = await API.graphql(graphqlOperation(listEstablishments))
		// console.log("All Establishments...", result.data.listEstablishments.items)
		this.setState({
			establishments: result.data.listEstablishments.items
		})
	}

	render() {
		const { establishments } = this.state

		return establishments.map(est => {
			return(
				<div className="establishments">
					<h1 key={est.id}>{est.name}</h1>
				</div>
			)
		})
	}
}

export default DisplayEstablishments