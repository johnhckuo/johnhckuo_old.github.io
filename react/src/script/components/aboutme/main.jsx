import React from "react"
import * as Style from "./style"
import * as FontAwesome from 'react-icons/lib/fa';
import myself from "../../../images/me.jpg"
import * as Global from "../Global/style"

export default class Aboutme extends React.Component{
	constructor(props){
		super(props);
		this.historyBack = this.historyBack.bind(this);
	}

	historyBack(){
		this.props.history.goBack();
	}

	render(){
		return(
			<Global.Container>
				<Global.Banner src={myself}/>
				<Style.Intro>
					<Global.HomeBtn onClick = {this.historyBack}>
						<FontAwesome.FaHome />
					</Global.HomeBtn>
					<Global.Title>
						Hello
					</Global.Title>
					<Style.IntroContent>
						<Style.Characteristic>
							<div><FontAwesome.FaAmericanSignLanguageInterpreting />I'm a team player</div>
							<div><FontAwesome.FaCode />I got mad skills</div>
							<div><FontAwesome.FaHeartO />I am passionate</div>
						</Style.Characteristic>
						<Global.HR />
						<Style.Aboutme>
							Hello! I'm John Kuo. I hold over 7 years of programming experience.
							I specialize in web development, blockchain applications design, and 3D game development.
							<Global.HR />
							I've received my master degree in July, 2017.
							My research is based on blockchain, and I've proposed a method to facilitate
							the design of a blockchain-based ecosystem toward success and to make it self-sustaining.
						</Style.Aboutme>

					</Style.IntroContent>
				</Style.Intro>
			</Global.Container>
		);
	}


}
