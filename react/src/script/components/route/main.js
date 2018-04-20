import React from "react"

import {Index, Aboutme, Contact, Experience, Portfolio} from "../"
import { Link, Router, Route, Switch } from 'react-router-dom'
import * as Style from "./style"
import * as Global from "../global/style"

export default class Routes extends React.Component{

  constructor(props){
    super(props);
    this.backgroundBlur = this.backgroundBlur.bind(this);
    this.state = {init: false, blur: false};
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({init : true})
    }, 10)
  }

  componentWillUnmount(){
    this.setState({
      init:false
    })
  }

  backgroundBlur(blur){
    this.setState({
      blur
    })
  }

  render(){
    return (
        <Style.RootContainer>
            <Global.Background blur={this.state.blur}/>
            <Switch>
                <Route exact path="/" render={props=> <Index {...props} blur={this.backgroundBlur} />}></Route>
                <Route exact path="/aboutme" render={props=> <Aboutme {...props} blur={this.backgroundBlur} />}></Route>
                <Route exact path="/experience" render={props=> <Experience {...props} blur={this.backgroundBlur} />}></Route>
                <Route exact path="/portfolio" render={props=> <Portfolio {...props} blur={this.backgroundBlur} />}></Route>
                <Route exact path="/contact" render={props=> <Contact {...props} blur={this.backgroundBlur} />}></Route>
                <Route render={props=> <GenericNotFound {...props} blur={this.backgroundBlur} />}/>
            </Switch>
        </Style.RootContainer>
    );
  }
}

const GenericNotFound = ()=>{
  return (<div>Not Found</div>)
}
