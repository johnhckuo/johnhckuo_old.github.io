import React from "react"

import * as Style from "./style.js"
import * as Global from "../Global/style"
import * as FontAwesome from 'react-icons/lib/fa'
import Experiences from "./data"

export default class Experience extends React.Component{
  constructor(props){
    super(props);
    this.historyBack = this.historyBack.bind(this);

  }

  historyBack(){
		this.props.history.goBack();
	}

  render(){
    return (
		<Global.Container>
			<Global.HomeBtn onClick = {this.historyBack}>
				<FontAwesome.FaHome />
			</Global.HomeBtn>
			<Global.Title>
				Hello
			</Global.Title>

			<Style.Timeline>
				{

					Experiences.map((experience)=>{
						return (
							<Style.Column>
								<Style.Title>
									<h2> <div>{experience.startDate} ─<br />{experience.endDate}</div> </h2>
									<h1>{experience.title}</h1>
									<h3>{experience.company}</h3>

								</Style.Title>
								<Style.Description>
									{
										experience.description.map((content)=><p>{content}</p>)
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
