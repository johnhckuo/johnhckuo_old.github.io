import React from "react"
import * as Style from "./style"
import * as Global from "../global/style"
import {FaHome} from 'react-icons/lib/fa'
import firebase from "firebase"

export default class Contact extends React.Component{
	constructor(props){
		super(props);
		this.historyBack = this.historyBack.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
		this.updateFormData = this.updateFormData.bind(this);
		this.validateInput = this.validateInput.bind(this);
		this.feedback = {
			name: "",
			email: "",
			message: ""
		}
		this.state = {
			email: true,
			name: true,
			message: true,
			init: false
		}
	}

	historyBack(){
 		this.setState({
			init:false
		})
		setTimeout(()=>{
			this.props.history.goBack();
		}, 500)
	}

	componentDidMount(){
		if (!firebase){
			var config = {
				apiKey: "AIzaSyA9QLI2RDzhBFAYb6LZq5bnsgYg28TNxeo",
				authDomain: "resume-f25af.firebaseapp.com",
				databaseURL: "https://resume-f25af.firebaseio.com",
				projectId: "resume-f25af",
				storageBucket: "resume-f25af.appspot.com",
				messagingSenderId: "1046487558013"
			};
			firebase.initializeApp(config);
		}

		setTimeout(()=>{
			this.setState({
				init:true
			})
		}, 500)
	}

	validateInput(type, input) {
		if (type === "email"){
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    	return re.test(String(input).toLowerCase());
		}else{
			return input.replace(/\s/g,'') !== "";
		}

	}

	updateFormData(e){
		this.feedback[e.target.name] = e.target.value;
		this.setState({
			[e.target.name] : this.validateInput(e.target.name, e.target.value)
		});
	}

	formSubmit(){
		if (!this.feedback.name || !this.feedback.message || !this.feedback.email){
			alert("Oops, you've missed some slots");
			return;
		}
		this.feedback.message = this.feedback.message.replace(/[^a-zA-Z 0-9]+/g,'');
		firebase.database().ref(this.feedback.name).set({
			email: this.feedback.email,
			message : this.feedback.message
		}).then(function(){
		  alert("I've receive you message! :)");
		}).catch(function(error) {
		  alert("Oops, something went wrong :(" + error);
		});
	}

	render(){
		return(
			<Global.Container type={this.props.width > Global.mobileWidth ? "small" : "large"} active={this.state.init}>

				<Global.HomeBtn onClick = {this.historyBack}>
		          <FaHome />
		        </Global.HomeBtn>
		        <Global.Title><h2>Get in touch with me!</h2></Global.Title>
		        <Global.HR />
		        <Style.FormContainer>
			        <Style.Form>
			            <div>
			              <label><span>Name</span>{this.state.name ? null : <Style.Warn>*Name missing</Style.Warn>}</label>
			              <Style.Input type="text" name="name" onChange={this.updateFormData}/>
			            </div>
			            <div>
			              <label><span>Email</span>{this.state.email ? null : <Style.Warn>*Invalid email</Style.Warn>}</label>
			              <Style.Input type="text" name="email" onChange={this.updateFormData}/>
			            </div>
			            <div>
			              <label><span>Message</span>{this.state.message ? null : <Style.Warn>No message for me? :(</Style.Warn>}</label>
			              <Style.Comment name="message" onChange={this.updateFormData}/>
			            </div>
			            <div>
			            	<Global.Btn onClick={this.formSubmit}>Send</Global.Btn>
			            </div>
			        </Style.Form>
		        </Style.FormContainer>
		        <Style.EmailMe>Or, just email me directly at <a href="mailto:johnhckuo@gmail.com" target="_blank"><strong>johnhckuo@gmail.com</strong></a>.</Style.EmailMe>


			</Global.Container>
		);
	}


}
