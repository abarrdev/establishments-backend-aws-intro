import React, { Component } from 'react'
import { listEstablishments } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayRatings extends Component {

	constructor() {
		super()
		this.state = {
			ratings: []
		}
	}

	render() {
		return(
			<div></div>
		)
	}
}

export default DisplayRatings;