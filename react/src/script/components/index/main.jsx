import React from "react"

import {Aboutme, Contact, Experience, Portfolio} from "../"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import * as Style from "./style"
import * as FontAwesome from 'react-icons/lib/fa';
import myself from "../../../images/me.jpg"
import * as Global from "../Global/style"

export default class Main extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <Style.Background>
            <Route exact path="/" component={Entry} ></Route>
            <Route path="/aboutme" component={Aboutme} ></Route>
            <Route path="/experience" component={Experience} ></Route>
            <Route path="/portfolio" component={Portfolio} ></Route>
            <Route path="/contact" component={Contact} ></Route>
        </Style.Background>
    );
  }
}


const Entry = ()=>{
  return(
    <Global.Container>
      <Style.Icon src={myself}/>
      <Global.Row>
        <h2>Hung-Chung Kuo</h2>
      </Global.Row>
      <Global.HR />
      <Global.Row>
        <h3>Programmer/</h3>
      </Global.Row>
      <Global.HR />
      <Global.Row>
        <Link to="/aboutme"><Global.Btn>About Me</Global.Btn></Link>
        <Link to="/experience"><Global.Btn>Experience</Global.Btn></Link>
        <Link to="/portfolio"><Global.Btn>Portfolio</Global.Btn></Link>
        <Link to="/contact"><Global.Btn>Contact</Global.Btn></Link>
      </Global.Row>
      <Global.HR />
      <Style.SocialIcon>
        <a href="https://github.com/johnhckuo" target="_blank"><FontAwesome.FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/johnhckuo/" target="_blank"><FontAwesome.FaLinkedinSquare /></a>
        <a href="https://www.facebook.com/johnhckuo" target="_blank"><FontAwesome.FaFacebookSquare /></a>
        <a href="https://plus.google.com/u/0/+HungChungKuo" target="_blank"><FontAwesome.FaGooglePlusSquare /></a>
        <a href="mailto:johnhckuo@gmail.com" target="_blank"><FontAwesome.FaEnvelopeSquare /></a>
        <a href="https://steamcommunity.com/id/johnhckuo/" target="_blank"><FontAwesome.FaSteamSquare /></a>
      </Style.SocialIcon>
    </Global.Container>
  );

}
