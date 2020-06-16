import React, { Component } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { updateRating } from '../graphql/mutations';

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
			ratingData: { //------form data------//
				ratingEstablishmentName: this.props.data.ratingEstablishmentName,
				overall_rating: this.props.data.overall_rating
			}
		}
	}

	componentWillMount = async () => { //---componentWillMount is deprecated.. need to replace
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


	handleUpdateRating = async event => {
		event.preventDefault()

		const input = {
			id: this.props.data.id,
			ratingUserId: this.state.ratingUserId,
			ratingUserUsername: this.state.ratingUserUsername,
			ratingEstablishmentId: this.props.ratingEstablishmentId,
			ratingEstablishmentName: this.state.ratingData.ratingEstablishmentName,
			overall_rating: parseInt(this.state.ratingData.overall_rating)
		}

		await API.graphql(graphqlOperation(updateRating, {input})) //---pass payload (input as an object) to built-in updateRating fn

		this.setState({ show: !this.state.show }) //----force-toggle modal close
	}


	handleEstablishmentName = event => {
		this.setState({
			ratingData: {...this.state.ratingData, ratingEstablishmentName: event.target.value}
		})
	}
	//----will probably erase, no need to be able to update establishment name----//


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