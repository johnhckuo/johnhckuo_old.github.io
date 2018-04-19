import React from "react"
import * as Style from "./style"
import * as Global from "../Global/style"
import * as FontAwesome from 'react-icons/lib/fa';

export default class Contact extends React.Component{
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

		        <Global.CenteredHeader>Get in touch with me!</Global.CenteredHeader>
						<Global.HomeBtn onClick = {this.historyBack}>
		          <FontAwesome.FaHome />
		        </Global.HomeBtn>

		        <Style.FormDiv>
		          <form action="https://Style.formspree.io/sophiaciocca@gmail.com" method="POST" id="contactStyle.form">
		            <div>
		              <Style.FormLabel>Name:</Style.FormLabel>
		              <Style.FormInput type="text" name="name" />
		            </div>
		            <div>
		              <Style.FormLabel>Email:</Style.FormLabel>
		              <Style.FormInput type="text" name="_replyto" />
		            </div>
		            <div>
		              <Style.FormLabel>Comment:</Style.FormLabel>
		              <Style.CommentInput name="comment" />
		            </div>
		            <button type="submit">Submit</button>
		          </form>
		        </Style.FormDiv>

		        <Style.EmailMe>Or, just email me directly at <a href="mailto:johnhckuo@gmail.com" target="_blank"><strong>johnhckuo@gmail.com</strong></a>.</Style.EmailMe>


			</Global.Container>
		);
	}


}
