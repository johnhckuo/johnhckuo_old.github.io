import React from "react"
import { Link } from 'react-router-dom'
import * as Style from "./style"
import { FaGithubSquare, FaLinkedinSquare, FaFacebookSquare, FaGooglePlusSquare, FaEnvelopeSquare, FaSteamSquare } from 'react-icons/lib/fa';
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
      <Style.IndexContainer width={this.props.width} active={this.state.init} >
        <Style.Icon>
          <img src={myself} alt="My selfie"/>
        </Style.Icon>
        <Style.Intro active={this.state.init}>
          <h1>John Kuo</h1>
          <Style.HR />
          <h2>Passionate Programmer / Amateur Gamer</h2>
        </Style.Intro>
        <Style.Links width={this.props.width}>
          <Link to={`${this.props.baseURL}aboutme`}><Style.Link firstLink={true}>About Me</Style.Link></Link>
          <Link to={`${this.props.baseURL}experience`}><Style.Link>Experience</Style.Link></Link>
          <Link to={`${this.props.baseURL}portfolio`}><Style.Link>Portfolio</Style.Link></Link>
          <Link to={`${this.props.baseURL}contact`}><Style.Link lastLink={true}>Contact</Style.Link></Link>
        </Style.Links>
        <Style.SocialIcon width={this.props.width}>
          <a rel="noopener" name="github" href="https://github.com/johnhckuo" target="_blank"><FaGithubSquare /></a>
          <a rel="noopener" name="linkedin" href="https://www.linkedin.com/in/johnhckuo/" target="_blank"><FaLinkedinSquare /></a>
          <a rel="noopener" name="facebook" href="https://www.facebook.com/johnhckuo" target="_blank"><FaFacebookSquare /></a>
          <a rel="noopener" name="googleplus" href="https://plus.google.com/u/0/+HungChungKuo" target="_blank"><FaGooglePlusSquare /></a>
          <a rel="noopener" name="email" href="mailto:johnhckuo@gmail.com" target="_blank"><FaEnvelopeSquare /></a>
          <a rel="noopener" name="steam" href="https://steamcommunity.com/id/johnhckuo/" target="_blank"><FaSteamSquare /></a>
        </Style.SocialIcon>
      </Style.IndexContainer>

    );
  }
}



