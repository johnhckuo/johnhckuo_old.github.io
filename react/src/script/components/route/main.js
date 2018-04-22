import React from "react"

import {Index, Aboutme, Contact, Experience, Portfolio} from "../"
import { Link, Router, Route, Switch } from 'react-router-dom'
import * as Style from "./style"
import * as Global from "../global/style"

export default class Routes extends React.Component{

  constructor(props){
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.getScreen = this.getScreen.bind(this);
    this.backgroundBlur = this.backgroundBlur.bind(this);
    this.getScreen();
    this.state = {init: false, blur: false, width: this.width, height: this.height};
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({init : true})
    }, 10)
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount(){
    this.setState({
      init:false
    })
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  backgroundBlur(blur){
    this.setState({
      blur
    })
  }

  getScreen(){
    this.width = window.screen.width;
    this.height = window.screen.height;

    if(window.devicePixelRatio < 1){
      width = window.screen.width/window.devicePixelRatio;
      height = window.screen.height/window.devicePixelRatio;
    }
  }

  updateWindowDimensions() {
    this.getScreen();
    this.setState({ width: this.width, height: this.height })
  }

  render(){
    return (
        <Style.RootContainer>
            <Global.Background blur={this.state.blur}/>
            <Switch>
                <Route exact path="/" render={props=> <Index {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } mobileWidth={this.mobileWidth}/>}></Route>
                <Route exact path="/aboutme" render={props=> <Aboutme {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } mobileWidth={this.mobileWidth}/>}></Route>
                <Route exact path="/experience" render={props=> <Experience {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } mobileWidth={this.mobileWidth}/>}></Route>
                <Route exact path="/portfolio" render={props=> <Portfolio {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } mobileWidth={this.mobileWidth}/>}></Route>
                <Route exact path="/contact" render={props=> <Contact {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } mobileWidth={this.mobileWidth}/>}></Route>
                <Route render={props=> <GenericNotFound {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } mobileWidth={this.mobileWidth}/>}/>
            </Switch>
        </Style.RootContainer>
    );
  }
}

const GenericNotFound = ()=>{
  return (<div>Not Found</div>)
}
