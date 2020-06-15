import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify' //amplify files
import DeleteRating from './DeleteRating' 
import EditRating from './EditRating'
import { listRatings } from '../graphql/queries' //pre-existing within /graphql
import { onCreateRating } from '../graphql/subscriptions' //pre-existing within /graphql

class DisplayRatings extends Component {
	constructor() {
		super()
		this.state = {
			ratings: []
		}
	}

//--------IMPORTANT: NEVER edit files within graphql or amplify directories (and subdirectories) directly!!!--------//

	componentDidMount = async () => {
		//------retrieves existing ratings------//
		this.getRatings()
		//-------once a new rating is created..------//
		this.createRatingListener = API.graphql(graphqlOperation(onCreateRating))
			//-----invoke subscription------//
			.subscribe({
				//-----..get the data for that rating-----//
				next: ratingData => {
					const newRating = ratingData.value.data.onCreateRating
					//-----exclude any duplicates (by id only)-----//
					const prevRatings = this.state.ratings.filter(rating => rating.id !== newRating.id)
					//-----store newly created rating + filtered version of prev state into new variable (newest rating displays first)------//
					const updatedRatings = [newRating, ...prevRatings]
					//------update state------//
					this.setState({
						ratings: updatedRatings
					})
				}
			})
	}


	componentWillUnmount() {
		//-----exit subscription------//
		this.createRatingListener.unsubscribe()
	}


	//---------get ratings from database asyncronously---------//
	getRatings = async () => {
		const result = await API.graphql(graphqlOperation(listRatings))
		this.setState({
			ratings: result.data.listRatings.items
		})
	}

	//WHERE YOU LEFT OFF: NEED TO DELETE OLD USER TABLE AND EDIT + UPDATE SCHEMA TO REFLECT THIS

	render() {
		const { ratings } = this.state

		return ratings.map(rating => {
			// {console.log(rating.user)}
			return(
				<div key={rating.id} className="establishments" style={rowStyle}>
					<span>{"The user "}{rating.ratingUserUsername}{" gave "}
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