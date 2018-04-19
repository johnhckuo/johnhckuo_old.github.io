import React from "react"
import * as Style from "./style"
import * as FontAwesome from 'react-icons/lib/fa';
import myself from "../../../images/me.jpg"

export default class Aboutme extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Style.Container>
				<Style.Icon src={myself}/>
				<Style.Intro>
					<h2>Hello</h2>
					<h3>A bit about me</h3>
					<Style.IntroContent>
						<Style.Characteristic>
							<div><FontAwesome.FaAmericanSignLanguageInterpreting />I'm a team player</div>
							<div><FontAwesome.FaCode />I got mad skills</div>
							<div><FontAwesome.FaHeartO />I am passionate</div>
						</Style.Characteristic>
						<Style.Aboutme>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Style.Aboutme>

					</Style.IntroContent>
				</Style.Intro>
			</Style.Container>
		);
	}


}
