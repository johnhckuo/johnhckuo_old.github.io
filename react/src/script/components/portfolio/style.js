import styled from 'styled-components';
export const Portfolio = styled.div`
	display:flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`;


export const List = styled.div`
	text-decoration: none;
	background: #fff;
	color: #282828;
	font-size: .875rem;
  	line-height: 1.8571;
	padding: 10px;
	padding-bottom: 20px;
	width: 380px;
	& > div{
		width: 80%;
	}
	svg{
		width: 1.7rem;
	}

`;


export const Title = styled.div`
	font-size: 20px;
	font-size: 1.7rem;
	text-decoration: none;
	font-weight: bolder;

	*{
		margin-right: 20px;

	}
	a{
		text-decoration: none;
		color: #282828;
		transition: color .4s;
		&:hover{
			color: gray;
		}
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
