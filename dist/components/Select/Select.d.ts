import { ReactNode } from "react";
import { BoxProps } from "../Box";
import { SelectProps, Option } from "./types";
interface Props extends BoxProps, SelectProps {
    options: Option[];
    startIcon?: ReactNode;
}
declare function SelectComponent({ scale, isSuccess, isWarning, options, selected, onChange, startIcon, ...props }: Props): JSX.Element;
declare namespace SelectComponent {
    var defaultProps: {
        scale: "md";
        isSuccess: boolean;
        isWarning: boolean;
        startIcon: null;
    };
}
export default SelectComponent;
