import { BoxProps } from "../Box";

export interface TabPresaleProps extends BoxProps {
  activeIndex?: number;
  onItemClick: (index: number) => void;
}
