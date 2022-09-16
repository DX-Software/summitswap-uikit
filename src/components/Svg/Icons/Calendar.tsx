import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 68 68" fill="none" {...props}>
      <path
        d="M19.8335 31.1666H25.5002V36.8333H19.8335V31.1666ZM19.8335 42.5H25.5002V48.1666H19.8335V42.5ZM31.1668 31.1666H36.8335V36.8333H31.1668V31.1666ZM31.1668 42.5H36.8335V48.1666H31.1668V42.5ZM42.5002 31.1666H48.1668V36.8333H42.5002V31.1666ZM42.5002 42.5H48.1668V48.1666H42.5002V42.5Z"
        fill={theme.colors[color] as string}
      />
      <path
        d="M14.1667 62.3333H53.8333C56.9585 62.3333 59.5 59.7918 59.5 56.6666V17C59.5 13.8748 56.9585 11.3333 53.8333 11.3333H48.1667V5.66663H42.5V11.3333H25.5V5.66663H19.8333V11.3333H14.1667C11.0415 11.3333 8.5 13.8748 8.5 17V56.6666C8.5 59.7918 11.0415 62.3333 14.1667 62.3333ZM53.8333 22.6666L53.8362 56.6666H14.1667V22.6666H53.8333Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
