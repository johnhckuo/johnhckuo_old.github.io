import styled from 'styled-components';

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
