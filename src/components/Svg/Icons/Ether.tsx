import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g clip-path="url(#clip0_2821_47354)">
        <path
          d="M17.722 12.1687L12.5004 15.4313L7.27539 12.1687L12.5004 3L17.722 12.1687ZM12.5004 16.4789L7.27539 13.2164L12.5004 21L17.7254 13.2164L12.5004 16.4789V16.4789Z"
          fill={theme.colors[color] as string}
        />
      </g>
      <defs>
        <clipPath id="clip0_2821_47354">
          <rect
            width="11"
            height="18"
            fill="white"
            transform="translate(7 3)"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
