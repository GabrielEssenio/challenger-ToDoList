import styled from 'styled-components';

export const navBarContainer = styled.nav` 
display: flex;
margin: 0;
padding: 0;
height: 10vh;
weight: 100vw;
border: 3px solid black;
background-color: #041A49;
border-radius: 5px;
justify-content:space-evenly;
`
export const ulBar = styled.ul`
align-items: center;
margin: 0;
padding: 0;
display: flex;
list-style-type: none;
overflow: hidden;
`

export const liBar = styled.li` 
padding: 0px 10px;
&:hover {
  opacity: 0.5;
}
`

export const aBar = styled.a`
color: white;
text-decoration: none;
` 