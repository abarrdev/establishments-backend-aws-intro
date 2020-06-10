import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import DeleteRating from './DeleteRating'
import EditRating from './EditRating'
import { listRatings } from '../graphql/queries'
import { onCreateRating } from '../graphql/subscriptions'

class DisplayRatings extends Component {
	constructor() {
		super()
		this.state = {
			ratings: []
		}
	}


	componentDidMount = async () => {
		//------retrieves existing ratings------//
		this.getRatings()
		//-------once a new rating is created..------//
		this.createRatingListener = API.graphql(graphqlOperation(onCreateRating))
			.subscribe({
				//-----..get the data for that rating-----//
				next: ratingData => {
					const newRating = ratingData.value.data.onCreateRating
					//-----filter duplicates-----//
					const prevRatings = this.state.ratings.filter(rating => rating.id !== newRating.id)
					const updatedRatings = [newRating, ...prevRatings]
					//------update state to exclude duplicates and add the rating that was just created------//
					this.setState({
						ratings: updatedRatings
					})
				}
			})
	}


	componentWillUnmount() {
		this.createRatingListener.unsubscribe()
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