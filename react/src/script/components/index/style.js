import styled from 'styled-components';
import React from "react"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10vw;
  padding-right: 10vw;
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

export const Footer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
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