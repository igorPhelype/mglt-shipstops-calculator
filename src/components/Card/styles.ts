import styled, { css } from "styled-components";
import { StyledCardContentProps } from "../../types/cards";

export const StyledCard = styled.div`
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    background: #ffffff;
    &:hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

export const StyledCardContent = styled.div<StyledCardContentProps>`
    ${({padding = "2px 16px;"}) => css`
        padding: ${padding};
        & > h4 {
            margin: 0;
            font-family: "StarJedi";
            color: #1b1b1b;
            font-size: 1rem;
        };
        & > span {
            font-size: 0.9rem;
            line-height: 0.9rem;
            display: block;
            margin-top: 4px;
        }
    `}
`