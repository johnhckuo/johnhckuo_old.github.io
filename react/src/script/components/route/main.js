import React from "react"

import {Index, Aboutme, Contact, Experience, Portfolio} from "../"
import { Link, Router, Route, Switch } from 'react-router-dom'
import * as Style from "./style"
import * as Global from "../global/style"

export default class Routes extends React.Component{

  constructor(props){
    super(props);
    this.state = {init: false};
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

  render(){
    return (
        <Style.RootContainer>
            <Switch>
                <Route exact path="/" component={Index} ></Route>
                <Route exact path="/aboutme" component={Aboutme} ></Route>
                <Route exact path="/experience" component={Experience} ></Route>
                <Route exact path="/portfolio" component={Portfolio} ></Route>
                <Route exact path="/contact" component={Contact} ></Route>
                <Route component={GenericNotFound} />
            </Switch>
        </Style.RootContainer>
    );
  }
}

const GenericNotFound = ()=>{
  return (<div>Not Found</div>)
}
