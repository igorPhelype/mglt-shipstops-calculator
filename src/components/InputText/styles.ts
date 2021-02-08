import styled from "styled-components";
import { StyledInputTextProps } from "../../types/input";

export const StyledInputText = styled.input<StyledInputTextProps>`
    ${({customStyles = {}}) => customStyles}
`