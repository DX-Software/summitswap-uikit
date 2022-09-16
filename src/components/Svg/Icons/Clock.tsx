import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 66 66" fill="none" {...props}>
      <path
        d="M33 5.5C17.8365 5.5 5.5 17.8365 5.5 33C5.5 48.1635 17.8365 60.5 33 60.5C48.1635 60.5 60.5 48.1635 60.5 33C60.5 17.8365 48.1635 5.5 33 5.5ZM33 55C20.8698 55 11 45.1302 11 33C11 20.8698 20.8698 11 33 11C45.1302 11 55 20.8698 55 33C55 45.1302 45.1302 55 33 55Z"
        fill={theme.colors[color] as string}
      />
      <path
        d="M35.75 19.25H30.25V34.1385L39.3058 43.1943L43.1942 39.3057L35.75 31.8615V19.25Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
