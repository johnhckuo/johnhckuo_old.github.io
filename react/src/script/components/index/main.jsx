import React from "react"

import {Aboutme, Contact, Experience, Portfolio} from "../"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import * as Style from "./style"

export default class Main extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Style.Container>
        <Style.Header>
          <Style.Icon />
          <Style.Menu>
            <Style.List><Link to="/aboutme">About Me</Link></Style.List>
            <Style.List><Link to="/experience">Experience</Link></Style.List>
            <Style.List><Link to="/portfolio">Portfolio</Link></Style.List>
            <Style.List><Link to="/contact">Contact</Link></Style.List>
          </Style.Menu>
        </Style.Header>
        <Route exact path="/aboutme" component={Aboutme} ></Route>
        <Route exact path="/experience" component={Experience} ></Route>
        <Route exact path="/portfolio" component={Portfolio} ></Route>
        <Route exact path="/contact" component={Contact} ></Route>
      </Style.Container>
    );
  }
}
