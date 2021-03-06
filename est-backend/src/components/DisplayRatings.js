import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify' //amplify files
import DeleteRating from './DeleteRating' 
import EditRating from './EditRating'
import { listRatings } from '../graphql/queries' //pre-existing within /graphql
import { onCreateRating, onDeleteRating, onUpdateRating } from '../graphql/subscriptions' //pre-existing within /graphql

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
		
		//------updates state after new rating is created------//
		this.createRatingListener = API.graphql(graphqlOperation(onCreateRating)) //-------once a new rating is created..------//
			.subscribe({ //-----invoke subscription------//
				next: ratingData => { //-----..get the data for that rating-----//
					const newRating = ratingData.value.data.onCreateRating //---store in a var----//
					const prevRatings = this.state.ratings.filter(rating => rating.id !== newRating.id) //-----exclude duplicates (by id) from state-----//
					const updatedRatings = [newRating, ...prevRatings] //----store new rating + filtered state (display new first)-----//
					this.setState({ //------update state------//
						ratings: updatedRatings
					})
				}
			})
		
		//------updates state after a rating is deleted-----//	
		this.deleteRatingListener = API.graphql(graphqlOperation(onDeleteRating))
			.subscribe({
				next: ratingData => {
					const deletedRating = ratingData.value.data.onDeleteRating
					const updatedRatings = this.state.ratings.filter(rating => rating.id !== deletedRating.id)
					this.setState({
						ratings: updatedRatings
					})
				}
			})

		//----updates state after a rating is updated----//
		this.updateRatingListener = API.graphql(graphqlOperation(onUpdateRating))
			.subscribe({
				next: ratingData => {
					const { ratings } = this.state
					const updatedRating = ratingData.value.data.onUpdateRating
					const index = ratings.findIndex(rating => rating.id === updatedRating.id)
					const updatedRatings = [
						...ratings.slice(0, index), 
						updatedRating,
						...ratings.slice(index + 1)
					]
					this.setState({
						ratings: updatedRatings
					})
				}
			})
	}


	componentWillUnmount() {
		//-----exit subscriptions-----//
		this.createRatingListener.unsubscribe()
		this.deleteRatingListener.unsubscribe()
		this.updateRatingListener.unsubscribe()
	}


	//---------get ratings from database asyncronously---------//
	getRatings = async () => {
		const result = await API.graphql(graphqlOperation(listRatings))
		this.setState({
			ratings: result.data.listRatings.items
		})
	}


	render() {
		const { ratings } = this.state

		return ratings.map(rating => {
			// {console.log(rating.user)}
			return(
				<div key={rating.id} className="establishments" style={rowStyle}>
					<span>{"The user "}{rating.ratingUserUsername}{" gave "}
					{rating.establishment.name}{" a rating of "}{rating.overall_rating}
					{/* ----might need to change rating.establishment.name to rating.ratingEstablishmentName???------ */}
					{" on "}
					<time style={{fontStyle: 'italic'}}>
						{new Date(rating.createdAt).toDateString()}{"."}
					</time>
					</span>
					<span>
					<DeleteRating data={rating}/>
					<EditRating data={rating}/>
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