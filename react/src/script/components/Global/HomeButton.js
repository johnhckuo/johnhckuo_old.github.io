import React from "react"
import * as Style from "./style"
import  {HomeBtn} from "./style"
import { FaHome } from 'react-icons/lib/fa';

export default class HomeButton extends React.Component{
	constructor(props){
		super(props);
		this.historyBack = this.historyBack.bind(this);
		this.state={
			init: false
		}
	}

	historyBack(){
		this.props.setActive(false)
		setTimeout(()=>{
			this.props.history.goBack();
		}, 500)
	}

	componentDidMount(){
		setTimeout(()=>{
			this.props.setActive(true)
		}, 500)
	}


	render(){
		return(
				<HomeBtn onClick = {this.historyBack} >
					<FaHome />
				</HomeBtn>
		);
	}


}
