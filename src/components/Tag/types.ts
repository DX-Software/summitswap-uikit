import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

export const variants = {
  PRIMARY: "primary",
  DEFAULT: "default",
  SECONDARY: "secondary",
  SUCCESS: "success",
  TEXTDISABLED: "textDisabled",
  TEXTSUBTLE: "textSubtle",
  BINANCE: "binance",
  FAILURE: "failure",
  INFO: "info",
  INVERSE: "inverse",
  AWESOME: "awesome",
} as const;

export type Variants = typeof variants[keyof typeof variants];

export interface TagProps extends SpaceProps {
  variant?: Variants;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  outline?: boolean;
  bold?: boolean;
}
