import React from "react"

import * as Style from "./style.js"
import * as Global from "../global/style"
import * as FontAwesome from 'react-icons/lib/fa'
import Experiences from "./data"

export default class Experience extends React.Component{
	constructor(props){
		super(props);
		this.historyBack = this.historyBack.bind(this);
		this.state = { init: false };

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
		return (
			<Global.Container type="large" active={this.state.init}>
				<Global.HomeBtn onClick = {this.historyBack}>
					<FontAwesome.FaHome />
				</Global.HomeBtn>
				<Global.Title>
					<h2>Experience</h2>
					<Global.HR />
					<h3>Besides from my research, <br /> 
					I've applied interships in various industries in order to pursue my dream</h3>
				</Global.Title>
				<Style.Timeline>
					{
						Experiences.map((experience, index)=>{
							return (
								<Style.Column key={index}>
									<Style.Title>
										<h2> <div>{experience.startDate} ─<br />{experience.endDate}</div> </h2>
										<h1>{experience.title}</h1>
										<h3>@ {experience.company}</h3>

									</Style.Title>
									<Style.Description>
										{
											experience.description.map((content, index)=><p key={index}>● {content}</p>)
										}
									</Style.Description>
								</Style.Column>
							);
						})
					}
				</Style.Timeline>
			</Global.Container>

		);
	}
}
