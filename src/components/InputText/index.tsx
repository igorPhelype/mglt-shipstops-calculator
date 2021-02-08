import React from 'react'
import { InputTextProps } from '../../types/input'
import { StyledInputText } from './styles'

const InputText: React.FC<InputTextProps> = ({
    value,
    onInputTextChange
}) => {
    return (
        <StyledInputText
            value={value}
            onChange={(e) => {
                onInputTextChange && onInputTextChange(e.target.value)
            }}
        />
    )
}

export default InputText

