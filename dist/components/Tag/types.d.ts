import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
export declare const variants: {
    readonly DEFAULT: "default";
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly SUCCESS: "success";
    readonly TEXTDISABLED: "textDisabled";
    readonly TEXTSUBTLE: "textSubtle";
    readonly BINANCE: "binance";
    readonly FAILURE: "failure";
    readonly INFO: "info";
};
export declare type Variants = typeof variants[keyof typeof variants];
export interface TagProps extends SpaceProps {
    variant?: Variants;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    outline?: boolean;
    bold?: boolean;
}
