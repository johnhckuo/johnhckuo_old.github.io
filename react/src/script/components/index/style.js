import styled from 'styled-components';
import React from "react"

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;


export const Header = styled.div`
  width: 100vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  *{
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

export const Menu = styled.ul`
  list-style-type: none;
`;

export const List = styled.li`
  float: left;
  margin-right: 10px;
  margin-left: 10px;
`;
