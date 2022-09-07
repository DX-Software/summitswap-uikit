import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="8" fill={theme.colors[color] as string} />
    </Svg>
  );
};

export default Icon;
