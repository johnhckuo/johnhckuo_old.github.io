import styled from 'styled-components';
import background from '../../../images/background.jpg'

function blur(isBlur){
	if (isBlur){
		return `
			-moz-transform: scale(1.1825);
		    -webkit-transform: scale(1.1825);
		    -ms-transform: scale(1.1825);
		    transform: scale(1.1825);
		    -moz-filter: blur(0.8rem);
		    -webkit-filter: blur(0.8rem);
		    -ms-filter: blur(0.8rem);
		    filter: blur(0.8rem);
		`;
	}else{
		return `
			-moz-transform: scale(1.1);
		    -webkit-transform: scale(1.1);
		    -ms-transform: scale(1.1);
		    transform: scale(1.1);
		`;
	}

}


export const Background = styled.div`
	position: fixed;
	top:0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	background-image: url(${background});
    background-repeat:no-repeat;
    background-size:100% 100%;
	background-attachment: fixed;
	${props=>blur(props.blur)};
	transition: all .5s;
	&:before{
		position: absolute;
	    z-index: 2;
	    display: block;
	    content: "";
	    top: 0; right: 0; bottom: 0; left: 0;
	    background: hsla(0,0%,0%,0.4);          /*adjust brightness here */
	}
`;

export const Container = styled.div`
	top: 15%;
	left: ${props=> props.type === "small" ? "25%" : "10%"};
	margin-bottom: 15%;
	position: absolute
	margin-left: auto;
	margin-right: auto;
	width: ${props=> props.type === "small" ? "40%" : "70%"};
	padding: 5%;
	display: block;
	background-color: #fff;
	color: #282828;
	z-index: 1;
	border-radius: 3px;
	box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);
	z-index: 2;
	transition: all 0.5s;
	transition-timing-function: ease-out;
	opacity:${props=> props.active ? .9 : 0};
	transform: translateY(${props=> props.active ? "0px" : "10px"})
`;

export const Title = styled.div`
	margin-bottom: 3%;
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

export const HomeBtn = styled.span`

	position: absolute;
	left: 10px;
	top: 10px;
	color: #282828;
	padding: 10px 10px;
	font-size: 14px;
	font-size: .875rem;
	display: inline-block;
	border: 1px solid;
	border-color: rgba(229,230,233,0.5) rgba(223,224,228,0.5) #d0d1d5;
	border-radius: 3px;
	text-decoration: none;
	background: #fff;
	cursor: pointer;
	transition: all .5s;
	&:hover{
		color: #383838;
		box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);
	}
	svg{
		width: 30px;
		height: 30px;
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
	cursor: pointer;
	margin-right: auto;
	margin-left: auto;
	width: 80px;
	text-align: center;
	transition: all .5s;
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
	background-image: -webkit-linear-gradient(left, #f0f0f0, #222222, #f0f0f0);
`;


export const mobileWidth = 700;
export const tabletWidth = 1024;
export const laptopWidth = 1300;
