import styled from 'styled-components';
import React from "react"

export const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
	display: block;
	max-width: 100%;
	width: auto;
	height: auto;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
	border: 0;
	border-radius: 50%;
	border: 3px solid #fff;
	height: 150px;
	width: 150px;

`;

export const Intro = styled.div`
	width: 50%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10%;
	h2{
		font-weight:bold;
		font-size: 3rem;
		margin-bottom: 10px;
		text-align: center;
	}

	h3{
		font-weight:bold;
		font-size: 2rem;
		text-align: center;
	}

`;



export const Header = styled.div`
  width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background: white;
  display: flex;
  align-items: center;
  color: #4D4D4D;
  *{
    margin-left: 20px;
    margin-right: 20px;
  }
`;


export const Menu = styled.ul`
  list-style-type: none;
`;

export const List = styled.li`
  display: inline-block;
  margin: 5px;
`;

export const Title = styled.div`
  font-weight:bold;
  h1{
    font-size: 3rem;
  }

  h2{
    font-size: 2rem;
  }

`;

export const SocialIcon = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  a{
    color: #333333;
    margin-right: 10px;
    margin-left: 10px;
    transition: color .5s;
    &:hover{
      color: gray;
    }
    svg{
      width: 50px;
      height: 50px;
    }
  }
`;
