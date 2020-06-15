import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class EditRating extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			show: false,
			id: "",
			ratingUserId: "",
			ratingUserUsername: "",
			ratingEstablishmentId: "", //---may need to hard-code value, as was done with handleAddRating in CreateRating 
			ratingEstablishmentName: "",
			overall_rating: "",
			ratingData: {
				ratingEstablishmentName: this.props.data.ratingEstablishmentName,
				overall_rating: this.props.data.overall_rating
			}
		}
	}

	componentWillMount = async () => {
		await Auth.currentUserInfo()
			.then(user => {
				this.setState({
					ratingUserId: user.attributes.sub,
					ratingUserUsername: user.username
				})
			})
	}


	handleModal = () => {
		this.setState({
			show: !this.state.show //----toggles modal display---//
		})

		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}


	handleUpdateRating = event => {
		event.preventDefault()
		console.log('hi')
	}


	handleEstablishmentName = event => {
		this.setState({
			ratingData: {...this.state.ratingData, ratingEstablishmentName: event.target.value}
		})
	}


	handleOverall = event => {
		this.setState({
			ratingData: {...this.state.ratingData, overall_rating: event.target.value}
		})
		//------be sure to set the value of overall_rating to parseInt(val) when submitting update---//
	}




	render() {
		console.log(this.state.ratingData)
		return(
			<>
				{this.state.show && ( //---if modal is toggled, display the following...----//
					<div className="modal">
						<button className="close" onClick={this.handleModal}>
							X
						</button>
						<form className="add-establishment" onSubmit={(event) => {this.handleUpdateRating(event)}}>
							<input style={{fontSize: '19px'}} type="text" 
								placeholder="business name" name="ratingEstablishmentName" 
								value={this.state.ratingData.ratingEstablishmentName} 
								onChange={(event) => this.handleEstablishmentName(event)} />
							<input style={{fontSize: '19px'}} type="text" 
								placeholder="rating (1-5)" name="overall_rating" 
								value={this.state.ratingData.overall_rating} 
								onChange={(event) => this.handleOverall(event)} />
							<button>
								update
							</button>
						</form>
					</div>
				)}

				<button className="btn-delete" onClick={this.handleModal}>{"edit"}</button>
			</>
		)
	}
}


export default EditRating;