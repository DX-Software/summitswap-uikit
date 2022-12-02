import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 44 44" stroke={theme.colors[color] as string} {...props}>
      <path
        d="M25.667 5.5V12.8333C25.667 13.3196 25.8601 13.7859 26.204 14.1297C26.5478 14.4735 27.0141 14.6667 27.5003 14.6667H34.8337"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M31.167 38.5H12.8337C11.8612 38.5 10.9286 38.1137 10.2409 37.4261C9.5533 36.7384 9.16699 35.8058 9.16699 34.8333V9.16667C9.16699 8.19421 9.5533 7.26158 10.2409 6.57394C10.9286 5.88631 11.8612 5.5 12.8337 5.5H25.667L34.8337 14.6667V34.8333C34.8337 35.8058 34.4474 36.7384 33.7597 37.4261C33.0721 38.1137 32.1395 38.5 31.167 38.5Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <path
        d="M14.667 27.4998H29.3337M20.167 20.1665V32.9998M14.667 20.1665H29.3337V32.9998H14.667V20.1665Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </Svg>
  );
};

export default Icon;
