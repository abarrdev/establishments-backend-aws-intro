import React, { Component } from 'react'
import { listRatings } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayRatings extends Component {

	constructor() {
		super()
		this.state = {
			ratings: []
		}
	}

	componentDidMount = async () => {
		this.getRatings();
	}

	getRatings = async () => {
		const result = await API.graphql(graphqlOperation(listRatings))
		this.setState({
			ratings: result.data.listRatings.items
		})
	}

	render() {
		console.log(this.state.ratings[0])
		const { ratings } = this.state

		return ratings.map(rating => {
			return(
				<div key={rating.id} className="establishments">
					<span>{"The user "}{rating.user.username}{" gave "}{rating.establishment.name}{" a "}{rating.overall_rating}{" rating."}</span>
				</div>
			)
		})
	}
}

export default DisplayRatings;