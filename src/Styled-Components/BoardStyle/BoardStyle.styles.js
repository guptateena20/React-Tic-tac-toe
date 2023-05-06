import styled from 'styled-components'

export const StyledBoardContainer = styled.div`
position: relative;
height: 100vh;
background-color: rgb(44, 45, 45);
`


export const StyledWinnerDiv = styled.div`
height: 30vh;
width: 25vw;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgba(227, 221, 221, 0.815);
border-radius: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;  
`

export const StyledWinnerPara = styled.p`
text-align: center;
font-size: 25px;
font-weight: 700;
margin: 30px 0;
`

export const StyledPlayAgainBtnDiv = styled.div`
text-align: center;
`

export const StyledPlayAgainBtn = styled.button`
padding: 15px 30px;
font-size: 18px;
border: ${(props) => props.variant === 'outline' ? "1px solid #004792" : "none"};
background-color: ${(props) => props.variant === 'outline' ? "transparent" : "#004792"};
color: ${(props) => props.variant === 'outline' ? "#004792" : "#fff"};
border-radius: 20px;
cursor: pointer;
`

export const StyledSquare = styled.div`
height: 45vh;
width: 45vh;
background-color: rgba(3, 3, 3, 0.189);
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
gap: 5px;
border-radius: 10px;
`

export const StyledSquareItem = styled.div`
background-color: rgba(227, 221, 221, 0.815);
display: grid;
place-items: center;
border-radius: 10px;
`

export const StyledXOrO = styled.h1`
color: black;
font-size : 40px
font-weight: 900;
`



