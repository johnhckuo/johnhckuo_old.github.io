import React from "react"

import * as Style from "./style.js"
import * as Global from "../Global/style"
import * as FontAwesome from 'react-icons/lib/fa';

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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Global.Container>
    );
  }
}
