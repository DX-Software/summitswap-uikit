import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 56 56" fill="none" {...props}>
      <path
        d="M15.0833 40.9167C18.6502 40.9167 21.5417 38.0252 21.5417 34.4583C21.5417 30.8915 18.6502 28 15.0833 28C11.5165 28 8.625 30.8915 8.625 34.4583C8.625 38.0252 11.5165 40.9167 15.0833 40.9167Z"
        stroke={theme.colors[color] as string}
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.9173 40.9167C44.4842 40.9167 47.3757 38.0252 47.3757 34.4583C47.3757 30.8915 44.4842 28 40.9173 28C37.3505 28 34.459 30.8915 34.459 34.4583C34.459 38.0252 37.3505 40.9167 40.9173 40.9167Z"
        stroke={theme.colors[color] as string}
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M28.0003 15.0834C31.5672 15.0834 34.4587 12.1919 34.4587 8.62502C34.4587 5.05818 31.5672 2.16669 28.0003 2.16669C24.4335 2.16669 21.542 5.05818 21.542 8.62502C21.542 12.1919 24.4335 15.0834 28.0003 15.0834Z"
        stroke={theme.colors[color] as string}
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40.917 28C40.917 20.8662 35.1342 15.0834 28.0003 15.0834C20.8665 15.0834 15.0837 20.8662 15.0837 28M28.0003 53.8334C28.0003 46.6995 22.2175 40.9167 15.0837 40.9167C7.94978 40.9167 2.16699 46.6995 2.16699 53.8334H28.0003ZM53.8337 53.8334C53.8337 46.6995 48.0509 40.9167 40.917 40.9167C33.7831 40.9167 28.0003 46.6995 28.0003 53.8334H53.8337Z"
        stroke={theme.colors[color] as string}
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon;
