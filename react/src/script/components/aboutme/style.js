import styled from 'styled-components';

export const Intro = styled.div`
	width: 80%;
	margin-left: auto;
	margin-right: auto;

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
	justify-content: center;
	div{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 170px;
		font-size: 1.2rem;
		font-weight: bold;
	}
	svg{
		margin-bottom: 10px;
	}

`;

export const Aboutme = styled.div`
	text-align: left;
	font-size: 1.5rem;
	line-height: 1.5;
`;
