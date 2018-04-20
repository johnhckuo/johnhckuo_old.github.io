import styled from 'styled-components';

export const Icon = styled.img`
	display: block;
	max-width: 100%;
	width: auto;
	height: auto;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
	border: 0;
	border-radius: 50%;
	border: 3px solid #fff;
	height: 150px;
	width: 150px;

`;


export const SocialIcon = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  a{
    color: #333333;
    margin-right: 10px;
    margin-left: 10px;
    transition: color .5s;
    &:hover{
      color: gray;
    }
    svg{
      width: 50px;
      height: 50px;
    }
  }
`;
