import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createRating } from '../graphql/mutations'

class CreateRating extends Component {
	constructor() {
		super()
		this.state = {
			ratingUserId: "",
			ratingUserUsername: "",
			ratingEstablishmentId: "",
			ratingEstablishmentName: "",
			overall_rating: "",
			// createdAt: ""
		}
	}

	componentDidMount = async () => {
		// come back to this
	}

	handleChange = event => this.setState({
		[event.target.name]: event.target.value
	})

	handleAddRating = async event => {
		event.preventDefault();
		const input = {
			ratingUserId: "b36b05d1-bdbd-4a1b-a013-97df769b5d8e", //this.state.ratingUserId,
			ratingUserUsername: this.state.ratingUserUsername,
			ratingEstablishmentId: "ef1f4106-6e8f-4285-ad4d-54690820bebb",//this.state.ratingEstablishmentId,
			ratingEstablishmentName: this.state.ratingEstablishmentName,
			overall_rating: parseInt(this.state.overall_rating),
			// createdAt: new Date().toISOString()
		}

		//------passing in createRating mutation and input (state + createdAt) to API-----//
		await API.graphql(graphqlOperation(createRating, { input }))

		//-----clearing form-------//
		this.setState({ 
			ratingUserId: "",
			ratingUserUsername: "",
			ratingEstablishmentId: "",
			ratingEstablishmentName: "",
			overall_rating: "",
			// createdAt: ""
		})
	}

	render() {
		console.log(this.state)
		return(
			<form className="add-establishment" onSubmit={this.handleAddRating}>
				<h1>Add a Business Rating:</h1>
				<input style={{ font: '19px' }} type="text" placeholder="business name" name="ratingEstablishmentName" required value={this.state.ratingEstablishmentName} onChange={this.handleChange} />
				<input style={{ font: '19px' }} type="text" placeholder="rating (1-5)" name="overall_rating" required value={this.state.overall_rating} onChange={this.handleChange} />
				<input style={{ font: '19px' }} type="text" placeholder="your username" name="ratingUserUsername" required value={this.state.ratingUserUsername} onChange={this.handleChange} />
				<input style={{ font: '19px' }} type="submit" className="button" />
			</form>
		)
	}
}

export default CreateRating;