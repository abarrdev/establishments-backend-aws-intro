import React, { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { deleteRating } from '../graphql/mutations'

class DeleteRating extends Component {

	handleDeleteRating = async ratingId => {
		const input = {
			id: ratingId
		}
		await API.graphql(graphqlOperation(deleteRating, {input}))
	}

	render() {
		const rating = this.props.data
		return(
			<button className="btn-delete" onClick={() => {this.handleDeleteRating(rating.id)}}>{"delete"}</button>
		)
	}
}

export default DeleteRating;