import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 62 62" fill="none" {...props}>
      <path
        d="M51.667 7.75H10.3337C7.48424 7.75 5.16699 10.0672 5.16699 12.9167V49.0833C5.16699 51.9327 7.48424 54.25 10.3337 54.25H51.667C54.5164 54.25 56.8337 51.9327 56.8337 49.0833V12.9167C56.8337 10.0672 54.5164 7.75 51.667 7.75ZM10.3337 49.0833V12.9167H51.667L51.6722 49.0833H10.3337Z"
        fill={theme.colors[color] as string}
      />
      <path
        d="M15.5 18.083H46.5V23.2497H15.5V18.083ZM15.5 28.4163H46.5V33.583H15.5V28.4163ZM15.5 38.7497H31V43.9163H15.5V38.7497Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
