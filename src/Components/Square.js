import React from 'react'
import {StyledSquareItem, StyledXOrO} from "../Styled-Components/BoardStyle/BoardStyle"

const Square = ({value, onClick}) => {
    return (
        <>
            <StyledSquareItem onClick={onClick
            }>
                <StyledXOrO>{value}</StyledXOrO>
            </StyledSquareItem>
        </>
    )
}

export default Square