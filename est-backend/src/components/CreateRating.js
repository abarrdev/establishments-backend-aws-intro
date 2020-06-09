import React, { Component } from 'react';

class CreateRating extends Component {
	constructor() {
		super()
		this.state = {
			ratingUserId: "",
			ratingUserUsername: "",
			ratingEstablishmentId: "",
			ratingEstablishmentName: "",
			overallRating: NaN
		}
	}

	componentDidMount = async () => {
		// come back to this
	}

	handleAddRating = async event => {
		event.preventDefault();
		const input = {
			ratingUserId: this.state.ratingUserId,
			ratingUserUsername: this.state.ratingUserUsername,
			ratingEstablishmentId: this.state.ratingEstablishmentId,
			ratingEstablishmentName: this.state.ratingEstablishmentName,
			overallRating: this.state.overallRating,
			createdAt: new Date().toISOString()
		}
	}

	render() {
		return(
			<form className="add-establishment" onSubmit={this.handleAddRating}>
				<h1>Add a Business Rating:</h1>
				<input style={{ font: '19px' }} type="text" placeholder="Business name:" name="businessName"/>
				<input style={{ font: '19px' }} type="text" placeholder="Overall Rating (1-5):" name="overallRating"/>
				<input style={{ font: '19px' }} type="text" placeholder="Your Username:" name="userName"/>
				<input style={{ font: '19px' }} type="submit" className="button" />
			</form>
		)
	}
}

export default CreateRating;