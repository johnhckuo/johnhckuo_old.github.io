import React from "react"
import * as Style from "./style"
import * as Global from "../Global/style"

export default class Filter extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Style.Container>

		        <Global.CenteredHeader>Get in touch with me!</Global.CenteredHeader>

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

  
			</Style.Container>
		);
	}


}
