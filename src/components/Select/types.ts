import { SpaceProps } from "styled-system"

export type Option = {
  label: string;
  value: string;
}

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface SelectProps extends SpaceProps {
  scale?: Scales;
  isSuccess?: boolean;
  isWarning?: boolean;
  selected?: string
}
