import React from "react"
import * as Style from "./style.js"
import * as Global from "../global/style"
import Experiences from "./data"
import HomeButton from "../global/HomeButton"

export default class Experience extends React.Component{
	constructor(props){
		super(props);
		this.state = { init: false };
	}

	render(){
		return (
			<Global.Container type="large" active={this.state.init}>
				<HomeButton history={this.props.history} setActive={(init)=>this.setState({init})} />
				<Global.Title>
					<h2>Experience</h2>
					<Global.HR />
					<h3>Besides from my research, <br /> 
					I've applied interships in various industries in order to pursue my dream</h3>
				</Global.Title>
				<Style.Timeline window={this.props.width > Global.mobileWidth ? "laptop" : "mobile"}>
					{
						Experiences.map((experience, index)=>{
							return (
								<Style.Column key={index} window={this.props.width > Global.mobileWidth ? "laptop" : "mobile"}>
									<div>
										<h2> <div>{experience.startDate} ─<br />{experience.endDate}</div> </h2>
										<h1>{experience.title}</h1>
										<h3>@ {experience.company}</h3>

									</div>
									<div>
										{
											experience.description.map((content, index)=><p key={index}>● {content}</p>)
										}
									</div>
								</Style.Column>
							);
						})
					}
				</Style.Timeline>
			</Global.Container>

		);
	}
}
