import React, { Component } from 'react'
import { listEstablishments } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayEstablishments extends Component {

	componentDidMount = async () => {
		this.getEstablishments()
	}

	getEstablishments = async () => {
		const result = await API.graphql(graphqlOperation(listEstablishments))
		console.log("All Establishments...", JSON.stringify(result.data.listEstablishments.items))
	}

	render() {
		return(
			<div>Hello, World.</div>
		)
	}
}

export default DisplayEstablishments