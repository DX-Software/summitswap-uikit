import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 64 64" stroke={theme.colors[color] as string} {...props}>
      <path
        d="M18.6667 26.6667H56L45.3333 16M45.3333 37.3333H8L18.6667 48"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </Svg>
  );
};

export default Icon;
