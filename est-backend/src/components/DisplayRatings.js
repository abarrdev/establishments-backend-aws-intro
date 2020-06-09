import React, { Component } from 'react'
import { listRatings } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import DeleteRating from './DeleteRating'
import EditRating from './EditRating'

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
		// console.log(this.state.ratings[0])
		const { ratings } = this.state

		return ratings.map(rating => {
			return(
				<div key={rating.id} className="establishments" style={rowStyle}>
					<span>{"The user "}{rating.user.username}{" gave "}
					{rating.establishment.name}{" a rating of "}{rating.overall_rating}
					{" on "}
					<time style={{fontStyle: 'italic'}}>
						{new Date(rating.createdAt).toDateString()}{"."}
					</time>
					</span>
					<span>
					<DeleteRating />
					<EditRating />
					</span>

				</div>
			)
		})
	}
}

const rowStyle = {
	background: '#f4f4f4',
	padding: '10px',
	border: '1px #ccc dotted',
	margin: '14px'
}

export default DisplayRatings;