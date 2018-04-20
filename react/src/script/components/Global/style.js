import styled from 'styled-components';

export const CenteredHeader = styled.h4`
	text-align: center;
	margin-bottom: 1.25em;
`

export const Banner = styled.img`
	position: absolute;
	left: 0px;
	top: 0px;
	display: block;
	max-width: 100%;
	width: auto;
	height: auto;
	vertical-align: middle;
	border: 0;
	height: 150px;
	width: 100%;


`;

export const Container = styled.div`
  	position: relative;
	width: 42rem;
	max-width: 750px;
	padding: 15px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	background-color: #fff;
	color: #282828;
	z-index: 1;
	border-radius: 3px;
	box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);
	opacity: .8;
`;


export const Title = styled.div`
	font-weight:bold;
	font-size: 3rem;
	margin-bottom: 10px;
	text-align: center;
`;

export const Row = styled.div`
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const HomeBtn = styled.span`

  position: absolute;
  left: 10px;
  top: 10px;
  color: #282828;
  padding: 15px 18px;
  font-size: 14px;
  font-size: .875rem;
  display: inline-block;
  border: 1px solid;
  border-color: rgba(229,230,233,0.5) rgba(223,224,228,0.5) #d0d1d5;
  border-radius: 3px;
  text-decoration: none;
  background: #fff;
  transition: color .4s;
  cursor: pointer;
  &:hover{
    color: #383838;
    box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);

  }
`;

export const Btn = styled.span`
  color: #282828;
  padding: 15px 18px;
  font-size: 14px;
  font-size: .875rem;
  display: inline-block;
  border: 1px solid;
  border-color: rgba(229,230,233,0.5) rgba(223,224,228,0.5) #d0d1d5;
  border-radius: 3px;
  text-decoration: none;
  background: #fff;
  transition: color .4s;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
  &:hover{
    color: #383838;
    box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);


  }
`;


export const HR = styled.hr`
	border: 0;
	height: 1px;
	opacity: .15;
	margin: 1em 0;
	background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
`;
