export interface StyledInputTextProps {
    error?: string;
    customStyles?: any;
}

export interface InputTextProps extends StyledInputTextProps {
    value?: string;
    onInputTextChange?: (value: string) => void;
    customStyles?: any;
}

export interface ErrorTextProps {
    visible: boolean
}