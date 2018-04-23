import React from "react"
import {Index, Aboutme, Contact, Experience, Portfolio} from "../"
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import * as Style from "./style"
import * as Global from "../global/style"

export default class Routes extends React.Component{

  constructor(props){
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.backgroundBlur = this.backgroundBlur.bind(this);
    this.state = {init: false, blur: false, width: window.innerWidth, height: window.innerHeight};
    this.baseURL = "/react/docs/";
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

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render(){
    return (
        <Style.RootContainer>
            <Global.Background blur={this.state.blur}/>
            <Switch>
                <Route exact path={this.baseURL} render={
                  props=> 
                    <Index {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } baseURL={this.baseURL}/>
                  }
                />
                <Route exact path={`${this.baseURL}aboutme`} render={
                  props=> 
                    <Aboutme {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } />
                  } 
                />
                <Route exact path={`${this.baseURL}experience`} render={
                  props=> 
                    <Experience {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height } /> 
                  } 
                />
                <Route exact path={`${this.baseURL}portfolio`} render={
                  props=> 
                    <Portfolio {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height }/>
                  } 
                />
                <Route exact path={`${this.baseURL}contact`} render={
                  props=> 
                    <Contact {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height }/>
                  } 
                />
                <Route render={
                  props=> 
                    <GenericNotFound {...props} blur={this.backgroundBlur} width={this.state.width} height={this.state.height }/>
                  } 
                />
            </Switch>
        </Style.RootContainer>
    );
  }
}

const GenericNotFound = ()=>{
  alert("Page not found! Redirecting you to the main page...");
  return <Redirect to={this.baseURL} />
}
