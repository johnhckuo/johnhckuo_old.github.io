import styled from 'styled-components';

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

export const HR = styled.hr`
	border: 0;
	height: 1px;
	opacity: .15;
	margin: 1em 0;
	background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
`;

export const Intro = styled.div`
	width: 80%;
	margin-left: auto;
	margin-right: auto;
	margin-top: 180px;
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

export const IntroContent = styled.div`
	margin-top: 5vh;
`;

export const Characteristic = styled.div`
	width: 100%;
	height: 20%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	div{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33%;
	}

`;

export const Aboutme = styled.div`
	text-align: left;
`;
