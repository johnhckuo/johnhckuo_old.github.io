import styled from 'styled-components';

export const Filter = styled.div`
	position: relative;
	width: 100%;
	display:flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`;

export const FilterInput = styled.input.attrs({
	placeholder: 'Enter a hashtag'
})`
	border: 1px solid transparent;
	border-radius: 2px 0 0 2px;
	box-sizing: border-box;
	-moz-box-sizing: border-box;
	height: 32px;
	outline: none;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	width:400px;
	z-index: 2;
`;

export const Portfolio = styled.div`
	display:flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	&>div{
		text-decoration: none;
		background: #fff;
		color: #282828;
		font-size: 1rem;
	  	line-height: 1.8571;
		padding: 20px;
		padding-bottom: 20px;
		width: 380px;
		& > div{
			width: 80%;
		}
	}
`;

export const Title = styled.div`
	font-size: 20px;
	font-size: 1.7rem;
	text-decoration: none;
	font-weight: bolder;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	margin-bottom: 5px;
	*{
		display:block;
		margin-right: 20px;

	}
	a{
		font-size: 1.6rem;
		text-decoration: none;
		color: #282828;
		transition: color .4s;
		&:hover{
			color: gray;
		}
	}
	svg{
		width: 1.7rem;
	}

`;

export const Tag = styled.span`
	display:inline-block;
	padding-left: 0.2rem;
	padding-right: 0.2rem;
	padding-top: 0.3rem;
	padding-bottom: 0.3rem;
	line-height: .8rem;
	font-size: 85%;
	background-color: rgba(255,255,255,0.075);
	border-radius: 3px;
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
	letter-spacing: 0;
	background: rgba(144,144,144,0.25);
	margin-right:6px;
`;

export const Description = styled.ul`
	list-style-type:circle;
	margin-top:10px;
	padding-left: 20px;
	li{
		width:100%;
	}
`;
