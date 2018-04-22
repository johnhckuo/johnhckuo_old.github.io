import React from "react"
import * as Style from "./style"
import {FaAmericanSignLanguageInterpreting, FaHome, FaCode, FaHeartO, FaSmileO } from 'react-icons/lib/fa';
import myself from "../../../images/aboutme_cover.jpg"
import * as Global from "../global/style"

export default class Aboutme extends React.Component{
	constructor(props){
		super(props);
		this.historyBack = this.historyBack.bind(this);
		this.state={
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
		setTimeout(()=>{
			this.setState({init : true})
		}, 500)
	}


	render(){
		return(
			<Global.Container active={this.state.init} type={this.props.width > Global.mobileWidth ? "small" : "large"}>
				<Global.Banner>
					<img src={myself} />
				</Global.Banner>
				<Style.Intro>
					<Global.HomeBtn onClick = {this.historyBack} >
						<FaHome />
					</Global.HomeBtn>
					<Global.Title>
						<h2>Hello</h2>
						<Global.HR />
						<h3>You can call me John! <FaSmileO /></h3>
					</Global.Title>
					<Style.IntroContent>

						<Style.Aboutme>
							I hold over 7 years of programming experience. <br />
							Love to work on some side projects related to web development, blockchain applications, and 3D game development.
							<Global.HR />
							<Style.Characteristic width={this.props.width > Global.mobileWidth ? "100%" : "50%"}>
								<div><FaAmericanSignLanguageInterpreting />I'm a team player</div>
								<div><FaCode />I got mad skills</div>
								<div><FaHeartO />I am passionate</div>
							</Style.Characteristic>
						</Style.Aboutme>

					</Style.IntroContent>
				</Style.Intro>
			</Global.Container>
		);
	}


}
