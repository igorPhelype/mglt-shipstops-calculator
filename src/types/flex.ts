
export enum FlexAlignments {
    INITIAL = "initial",
    START = "start",
    CENTER = "center",
    SPACE_BETWEEN = "space-between",
    SPACE_AROUND = "space-around",
    SPACE_EVENLY = "space-evenly"
}

export enum FlexDirections {
    INITIAL = "initial",
    ROW = "row",
    ROW_REVERSE = "row-reverse",
    COLUMN = "column",
    COLUMN_REVERSE = "column-reverse",
}

export interface FlexContainerProps {
    align?: FlexAlignments;
    justify?: FlexAlignments;
    direction?: FlexDirections;
    flex?: number | string;
    height?: string;
    width?: string;
    customStyles?: any;
}