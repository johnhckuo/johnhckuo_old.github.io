import styled from 'styled-components';

export const Icon = styled.img`
	display: block;
	max-width: 100%;
	width: auto;
	height: auto;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
  margin-bottom: 5%;
	border: 0;
	border-radius: 50%;
	border: 3px solid #fff;
	height: 150px;
	width: 150px;
  box-shadow: 0 0 10px 0 rgba(40,40,40,0.3);
`;


export const SocialIcon = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  a{
    color: #333333;
    margin-right: 5px;
    margin-left: 5px;
    transition: color .5s;
    &:hover{
      color: gray;
    }
    svg{
      width: 30px;
      height: 30px;
    }
  }
`;

export const Row = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  text-align: center;
  transition: all 1s;
  padding: ${props=> props.active ? "3rem 2rem" : "0rem 0rem"};
  height: ${props=> props.active ? "" : "0px"};
  box-sizing: border-box;
  max-height: 40rem;
  overflow: hidden;

  h1{
    font-size: 2rem;
    color: black;
    font-weight:bold;
  }
  h2{
    font-size: 1rem;
    font-style: italic;
    color: gray;
  }
`;

export const Links = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 80%;
  text-align: center;

`;