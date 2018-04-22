import styled from 'styled-components';

export const Intro = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;

`;

export const Characteristic = styled.div`
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 30px;
	width: ${props=> props.width};
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
		margin-top: 20px;
		text-align: center;
	}
	svg{
		width: 50px;
		height: auto;
		margin-bottom: 10px;
	}

`;

export const Aboutme = styled.div`
	text-align: left;
	font-size: 1.5rem;
	line-height: 1.5;
`;

export const Banner = styled.div`
	left: 0px;
	top: 0px;
	overflow: hidden;
	border-radius: 10px;
	margin-bottom: 20px;
	height: 100%;
	img{
		width: 100%;
		margin-top: -20%;
	}

`;
