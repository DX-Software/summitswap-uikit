import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 20 18" fill="none" {...props}>
      <path
        d="M6.17966 16.6406C6.17966 17.0555 6.51247 17.3906 6.92497 17.3906H13.075C13.4875 17.3906 13.8203 17.0555 13.8203 16.6406V12.0469H6.17966V16.6406ZM18.6273 0.609375H1.37263C0.798409 0.609375 0.439815 1.23516 0.728096 1.73438L5.91482 10.5469H14.0898L19.2765 1.73438C19.5601 1.23516 19.2015 0.609375 18.6273 0.609375Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
