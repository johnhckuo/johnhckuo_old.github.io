import styled from 'styled-components'

export const Timeline = styled.div`
	position: relative;
	padding: 40px 0px;
	width: 80%;
	margin-left: 10%;
	margin-bottom: 40px;
	&:before{
		content: "";
		position: absolute;
		top: 40px;
		left: 65px;
		width: 3px;
		height: calc(100% - 80px);
		background: #c0392b;
	}
`;


export const Column = styled.div`
	position: relative;
	margin: 40px 40px 40px 120px;
	
`;

export const Title = styled.div`
	position: relative;
	h1{
		font-size: 20px;
		font-weight: bolder;
	}
	
	h2{
		position: absolute;
		font-size: 15px;
		color: rgba(0,0,0,0.5);
		float :left;
		&:before{
			content: "";
			position: absolute;
			left: -62px;
			width: 10px;
			height: 10px;
			background: #fff;
			border: 3px solid #c0392b;
		}
		div{
			position: relative;
			display: inline-block;
			left: -20vh;
		}
	}


	h3{
		margin-top:10px;
		color: gray;
	}

`;

export const Description = styled.div`
	position: relative;
	border-left: 1px solid #000;
	p{
		font-size: 13px;
		line-height: 20px;
		margin-left: 20px;
		margin-top: 10px;
	}
`;