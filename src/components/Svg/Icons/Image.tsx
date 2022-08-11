import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M50.6667 8H13.3333C10.392 8 8 10.392 8 13.3333V50.6667C8 53.608 10.392 56 13.3333 56H50.6667C53.608 56 56 53.608 56 50.6667V13.3333C56 10.392 53.608 8 50.6667 8ZM13.3333 50.6667V13.3333H50.6667L50.672 50.6667H13.3333Z"
        fill={theme.colors[color] as string}
      />
      <path
        d="M26.6667 37.3337L24 34.667L16 45.3337H48L34.6667 26.667L26.6667 37.3337Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
