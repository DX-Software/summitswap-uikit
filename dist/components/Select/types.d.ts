import { SpaceProps } from "styled-system";
export declare type Option = {
    label: string;
    value: string;
};
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
    readonly LG: "lg";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface SelectProps extends SpaceProps {
    scale?: Scales;
    isSuccess?: boolean;
    isWarning?: boolean;
    selected?: string;
}
