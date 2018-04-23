import styled from 'styled-components'
import {mobileWidth} from "../global/style"

export const IndexContainer = styled.div`
  position: relative;
  width: ${props=> props.width > mobileWidth ? "50%" : "100%"};
  padding: 5%;
  display: block;
  background: rgba(1, 1, 1, 0);
  transition: all 0.5s;
  transition-timing-function: ease-out;
  height: 60%;
  color: #ffffff;
  letter-spacing: 3px;
  margin-top: 2%;
`;

export const Icon = styled.div`

  img{
    display: block;
    width: auto;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border: 0;
    border-radius: 50%;
    border: 3px solid #fff;
    height: 150px;
    width: 150px;
  }
  &:after{
    content: '';
    display: block;
    position: relative;
    bottom: 0px;
    left: calc(50% - 1px);
    width: 1px;
    height: calc(3.5rem + 1px);
    background: #ffffff;
  }
`;

export const Intro = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  height: ${props=> props.window === "mobile" ? "50%" : "35%"};
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  text-align: center;
  transition: all 1s;
  height: ${props=> props.active ? "" : "0px"};
  box-sizing: border-box;
  max-height: 40rem;
  overflow: hidden;
  *{
    width: 100%;
    left: 0px;
    text-align: center;
  }
  h1{
    position: absolute;
    font-size: 2rem;
    color: #ffffff;
    font-weight:bold;
    top: 25%;
  }
  h2{
    position: absolute;
    top: 65%;
    font-size: 1rem;
    color: #ffffff;
  }

`;

export const Links = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5%;
  width: ${props=>props.width > mobileWidth ? "100%" : "60%"};
  text-align: center;
  &:before{
    content: '';
    display: block;
    position: relative;
    top: 0px;
    left: calc(50% - 1px);
    width: 1px;
    height: calc(3.5rem + 1px);
    background: #ffffff;
    box-sizing: border-box;
  }
`;

export const Link = styled.span`
  color: #ffffff;
  padding: 15px 18px;
  font-size: 14px;
  font-size: .875rem;
  display: inline-block;
  border: 1px solid;
  border-color: #ffffff;
  text-decoration: none;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  width: 110px;
  text-align: center;
  transition: all .5s;
  float: ${props=>props.float ? props.float : "inherit"};

  border-top-left-radius: ${props=>props.firstLink ? "3px" : "0px"};
  border-bottom-left-radius: ${props=>props.firstLink ? "3px" : "0px"};
  border-bottom-right-radius: ${props=>props.lastLink ? "3px" : "0px"};
  border-top-right-radius: ${props=>props.lastLink ? "3px" : "0px"};

  &:hover{
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);
  }

`;

export const SocialIcon = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  flex-wrap: wrap;
  box-sizing: border-box;
  a{
    color: #AAAAAA;
    margin-right: 5px;
    margin-left: 5px;
    transition: color .5s;
    width: ${ props=> props.width  > mobileWidth ? "35px" : "25%"};
    &:hover{
      color: #ffffff;
    }
    svg{
      width: 100%;
      height: 100%;
    }
  }
`;

export const HR = styled.hr`
  position: absolute;
  top: 50%;
  border: 0;
  height: 1px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0));
`;



