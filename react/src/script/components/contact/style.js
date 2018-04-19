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


export const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

export const FormLabel = styled.label`
  display: block;
`

export const FormInput = styled.input`
  width: 100%;
`

export const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`

export const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
`