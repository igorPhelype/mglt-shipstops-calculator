import React from 'react'

import {
    StyledErrorText,
    StyledInputBox,
    StyledInputText
} from './styles'

import { InputTextProps } from '../../types/input'
import { FlexAlignments, FlexDirections } from '../../types/flex'

const InputText: React.FC<InputTextProps> = ({
    value,
    onInputTextChange,
    error
}) => {
    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputTextChange && onInputTextChange(e.target.value)
    }

    return (
        <StyledInputBox
            justify={FlexAlignments.CENTER}
            align={FlexAlignments.CENTER}
            direction={FlexDirections.COLUMN}
        >
            <StyledInputText
                error={error}
                type="number"
                value={value}
                onChange={handleInputTextChange}
            />
            <StyledErrorText
                visible={Boolean(error)}
            >
                {error}
            </StyledErrorText>
        </StyledInputBox>
    )
}

export default InputText

