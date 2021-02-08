export interface StyledInputTextProps {
    customStyles?: any;
}

export interface InputTextProps extends StyledInputTextProps{
    value?: string;
    onInputTextChange?: (value: string) => void;
    customStyles?: any;
}