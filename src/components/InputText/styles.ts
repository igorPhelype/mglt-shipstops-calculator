import styled from "styled-components";
import { ErrorTextProps, StyledInputTextProps } from "../../types/input";
import { FlexContainer } from "../FlexContainer";

export const StyledInputBox = styled(FlexContainer)`
    margin-bottom: 8px;
    & > input {
        display: block;
        margin-bottom: 2px;
    };
`

export const StyledInputText = styled.input<StyledInputTextProps>`
    border: ${({error}) => Boolean(error) ? "solid 1px #ff4f4f" : "solid 1px black"};
    border-radius: 5px;
    padding: 12px 16px;
    &:focus {
        outline: none !important;
        border-color: #bfae1c
    }
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`

export const StyledErrorText = styled.span<ErrorTextProps>`
    visibility: ${({visible}) => visible ? "visible" : "hidden"};
    min-height: 17px;
    width: 100%;
    color: #ff4f4f;
    display: block;
    font-size: 0.8rem;
`