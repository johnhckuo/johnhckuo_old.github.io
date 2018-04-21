import React from "react"

import {Aboutme, Contact, Experience, Portfolio} from "../"
import { Link, Router, Route, Switch } from 'react-router-dom'
import * as Style from "./style"
import * as FontAwesome from 'react-icons/lib/fa';
import myself from "../../../images/me.jpg"
import * as Global from "../global/style"

export default class Index extends React.Component{

  constructor(props){
    super(props);
    this.state = {init: false};
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({init : true})
    }, 500)
    this.props.blur(false);
  }

  componentWillUnmount(){
    this.setState({
      init:false
    })
    this.props.blur(true);
  }

  render(){
    return(
      <Style.IndexContainer width={this.props.width > this.props.mobileWidth ? "50%" : "80%"} active={this.state.init} >
        <Style.Icon>
          <img src={myself} />
        </Style.Icon>
        <Style.Intro active={this.state.init}>
          <h1>Hung-Chung Kuo</h1>
          <Style.HR />
          <h2>Passionate Programmer / Amateur Gamer</h2>
        </Style.Intro>
        <Style.Links width={this.props.width > this.props.mobileWidth ? "100%" : "60%"}>
          <Link to="/aboutme"><Style.Link firstLink={true}>About Me</Style.Link></Link>
          <Link to="/experience"><Style.Link>Experience</Style.Link></Link>
          <Link to="/portfolio"><Style.Link>Portfolio</Style.Link></Link>
          <Link to="/contact"><Style.Link lastLink={true}>Contact</Style.Link></Link>
        </Style.Links>
        <Style.SocialIcon>
          <a href="https://github.com/johnhckuo" target="_blank"><FontAwesome.FaGithubSquare /></a>
          <a href="https://www.linkedin.com/in/johnhckuo/" target="_blank"><FontAwesome.FaLinkedinSquare /></a>
          <a href="https://www.facebook.com/johnhckuo" target="_blank"><FontAwesome.FaFacebookSquare /></a>
          <a href="https://plus.google.com/u/0/+HungChungKuo" target="_blank"><FontAwesome.FaGooglePlusSquare /></a>
          <a href="mailto:johnhckuo@gmail.com" target="_blank"><FontAwesome.FaEnvelopeSquare /></a>
          <a href="https://steamcommunity.com/id/johnhckuo/" target="_blank"><FontAwesome.FaSteamSquare /></a>
        </Style.SocialIcon>
      </Style.IndexContainer>

    );
  }
}



