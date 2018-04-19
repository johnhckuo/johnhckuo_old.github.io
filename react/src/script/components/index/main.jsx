import React from "react"

import {Aboutme, Contact, Experience, Portfolio} from "../"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import * as Style from "./style"
import * as FontAwesome from 'react-icons/lib/fa';

export default class Main extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <Style.Container>
            <Header />
            <Route path="/aboutme" component={Aboutme} ></Route>
            <Route path="/experience" component={Experience} ></Route>
            <Route path="/portfolio" component={Portfolio} ></Route>
            <Route path="/contact" component={Contact} ></Route>
            <Footer />
        </Style.Container>
      </Router>
    );
  }
}


const Header = ()=>{
  return (
    <Style.Header>
      <Style.Title>
        <h2>Hung-Chung Kuo</h2>
        <h3>Programmer/</h3>
      </Style.Title>
      <Style.Menu>
        <Style.List><Link to="/aboutme">About Me</Link></Style.List>
        <Style.List><Link to="/experience">Experience</Link></Style.List>
        <Style.List><Link to="/portfolio">Portfolio</Link></Style.List>
        <Style.List><Link to="/contact">Contact</Link></Style.List>
      </Style.Menu>
    </Style.Header>
  );
}


const Footer = ()=>{
  return (
    <Style.Footer>
      <a href="https://github.com/johnhckuo" target="_blank"><FontAwesome.FaGithubSquare /></a>
      <a href="https://www.linkedin.com/in/johnhckuo/" target="_blank"><FontAwesome.FaLinkedinSquare /></a>
      <a href="https://www.facebook.com/johnhckuo" target="_blank"><FontAwesome.FaFacebookSquare /></a>
      <a href="https://plus.google.com/u/0/+HungChungKuo" target="_blank"><FontAwesome.FaGooglePlusSquare /></a>
      <a href="mailto:johnhckuo@gmail.com" target="_blank"><FontAwesome.FaEnvelopeSquare /></a>
    </Style.Footer>
  );
}