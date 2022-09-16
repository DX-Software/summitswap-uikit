import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 56 42" fill="none" {...props}>
      <path
        d="M7.33398 6.79167C7.33398 6.79167 15.084 19.7083 28.0007 19.7083C40.9173 19.7083 48.6673 6.79167 48.6673 6.79167"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        fill="none"
      />
      <path
        d="M7.33398 2.91667V39.0833"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.667 2.91667V39.0833"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.16699 29.3958C2.16699 29.3958 17.9094 28.6242 28.0003 28.75C38.1006 28.8759 53.8337 30.0417 53.8337 30.0417"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M17.667 17.125V28.75"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M28 19.7083V28.75"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M38.334 17.125V28.75"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M7.33366 6.79167L2.16699 13.25"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M53.8337 13.25L48.667 6.79167"
        stroke={theme.colors[color] as string}
        stroke-width="4"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default Icon;
