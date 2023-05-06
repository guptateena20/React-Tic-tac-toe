import React, { useState } from 'react'
import Square from './Square'
// import "../Styles/Board.css"
import StyledSquare, { StyledBoardContainer, StyledWinnerDiv, StyledWinnerPara, StyledPlayAgainBtnDiv, StyledPlayAgainBtn } from "../Styled-Components/BoardStyle/BoardStyle"


const array = Array(9).fill(0)
console.log(array);
const Board = () => {
    const [squareItem, setSquareItem] = useState(Array(9).fill(null));
    console.log("squareItem", squareItem);
    const [isXTurn, setIsXTurn] = useState(true);
    // const [xWinningCount, setXWinningCount] = useState(0);
    // const [oWinningCount, setOWinningCount] = useState(0);

    const checkWinner = () => {
        const winner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let x of winner) {
            const [a, b, c] = x;
            if (squareItem[a] !== null && squareItem[a] === squareItem[b] && squareItem[a] === squareItem[c]) {
                return squareItem[a];
            }
        }
        return false;
    }
    const isWinner = checkWinner();


    const handleClick = (index) => {
        if (squareItem[index] !== null) {
            return;
        }
        else {
            squareItem[index] = isXTurn ? "X" : "O";
            setSquareItem(squareItem)
            setIsXTurn(!isXTurn);
        }
    }
    const playAgain = () => {
        setSquareItem(Array(9).fill(null))
    }

    return (
        <>
            <StyledBoardContainer>

                {
                    isWinner ?
                        <StyledWinnerDiv>
                            <StyledWinnerPara>

                                Player <span style={{ color: "#C60C30", fontSize: "3rem" }}>{isWinner}</span> won the game.
                            </StyledWinnerPara>
                            
                            <StyledPlayAgainBtnDiv>
                                <StyledPlayAgainBtn 
                                    onClick={playAgain}>
                                    Play again
                                </StyledPlayAgainBtn>
                            </StyledPlayAgainBtnDiv>
                        </StyledWinnerDiv>
                        :
                        <>


                            <StyledSquare>
                                {
                                    array.map((_, index) => {
                                        return (
                                            <Square onClick={() => handleClick(index)} value={squareItem[index]} key = {index}/>
                                        )
                                    })
                                }
                            </StyledSquare>
                        </>
                }
            </StyledBoardContainer>
        </>
    )
}

export default Board