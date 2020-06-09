import React, { Component } from 'react';

class CreateRating extends Component {
	constructor() {
		super()
		this.state = {
			ratingUserId: "",
			ratingEstablishmentId: ""
		}
	}

	componentDidMount = async () => {
		// come back to this
	}

	handleAddRating = async event => {
		event.preventDefault();
		console.log('clickedy')
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