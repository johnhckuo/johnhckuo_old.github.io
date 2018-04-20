import styled from 'styled-components';
import background from '../../../images/background.jpg'
import overlay from '../../../images/overlay.png'


function blur(isBlur){
	if (isBlur){
		return `
			-moz-transform: scale(1.0825);
		    -webkit-transform: scale(1.0825);
		    -ms-transform: scale(1.0825);
		    transform: scale(1.0825);
		    -moz-filter: blur(0.2rem);
		    -webkit-filter: blur(0.2rem);
		    -ms-filter: blur(0.2rem);
		    filter: blur(0.2rem);
		`;
	}

}

function containerCommon(width, active){
	return `
		position: absolute;
		width: ${width ? width : "50%"};
		padding: 5%;
		display: block;
		margin-left: auto;
		margin-right: auto;
		background-color: #fff;
		color: #282828;
		z-index: 1;
		border-radius: 3px;
		box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);
		z-index: 2;
		transition: all 0.5s;
		transition-timing-function: ease-out;
		opacity:${active ? .9 : 0};
		transform: translateY(${active ? "0px" : "20px"})
	`;
}

export const Background = styled.div`
	position: fixed;
	top:0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background-image: url(${background});
    background-repeat:no-repeat;
    background-size:100% 100%;
	background-attachment: fixed;
	${props=>blur(props.blur)};
	transition: all .5s;
`;

export const Banner = styled.div`
	left: 0px;
	top: 0px;
	overflow: hidden;
	border-radius: 10px;
	margin-bottom: 20px;
	height: 200px;
	img{		
		width: 100%;
		margin-top: -20%;
	}

`;

export const Container = styled.div`
	${props=>containerCommon(props.width, props.active)};
`;

export const ScrollContainer = styled.div`
  	top: 15%;
  	margin-bottom: 15%;
	${props=>containerCommon(props.width, props.active)};
`;

export const Title = styled.div`
	margin-bottom: 5%;
	text-align: center;

	h2{
		font-size: 2rem;
		color: black;
		font-weight:bold;
	}
	h3{
		font-size: 1.5rem;
		font-style: italic;
		color: gray;
	}
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


