import styled, { css } from "styled-components";
import { FlexAlignments, FlexContainerProps, FlexDirections } from "../../types/flex";

export const StyledFlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    ${({
        align = FlexAlignments.INITIAL,
        justify = FlexAlignments.INITIAL,
        direction = FlexDirections.INITIAL,
        flex = "initial",
        height = "initial",
        width = "initial",
    }) => css`
        align-items: ${align};
        justify-content: ${justify};
        flex-direction: ${direction};
        flex: ${flex};
        height: ${height};
        width: ${width};
    `}
    ${({customStyles = {}}) => customStyles}
`
