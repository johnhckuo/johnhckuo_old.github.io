import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	background: #193549;
	color: white;
	font-family: 'helvetica neue', sans-serif;
	font-weight: 100;
	width: 100%;
	height: 100%;
	padding-top: 5vh;
	padding-bottom: 10vh;
	padding-left: 10vw;
	padding-right: 10vw;
	box-sizing: border-box;
	flex-flow: row wrap;
	flex-wrap: wrap;

`;

export const Icon = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 100%;
	margin-bottom: 10%;

`;

export const Intro = styled.div`
	width: 50%;
	margin-left:10%;
	margin-top: 10%;
	h2{
		font-weight:bold;
		font-size: 3rem;
		margin-bottom: 10px;
	}

	h3{
		font-weight:bold;
		font-size: 2rem;
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
	margin-bottom: 5vh;
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