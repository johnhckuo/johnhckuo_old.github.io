import styled from 'styled-components';
import background from '../../../images/background.jpg'

function containerCommon(width){
	return `
		position: absolute;
		width: ${width};
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
		z-index: 2;
	`;
}

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

export const Container = styled.div.attrs({
	width: props => props.width ? props.width : "42rem"
})`
	${props=>containerCommon(props.width)};
`;

export const ScrollContainer = styled.div.attrs({
	width: props => props.width ? props.width : "42rem"
})`
  	top: 5rem;
	${props=>containerCommon(props.width)};
`;

export const Title = styled.div`
	font-weight:bold;
	font-size: 2rem;
	font-style: italic;
	margin-bottom: 10px;
	text-align: center;
	color: gray;
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
  float: ${props=>props.float ? props.float : "inherit"};
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


export const Background = styled.div`
	position: absolute;
	top:0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	background-image: url(${background});
    background-repeat:no-repeat;
    background-size:100% 100%;
	background-attachment: fixed;
`;