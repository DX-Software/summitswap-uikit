import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M13.2344 3.46119e-05C10.6094 0.0105815 8.5 2.44339 8.5 5.39651V7.87502H1.5C0.671875 7.87502 0 8.63088 0 9.56252V16.3125C0 17.2441 0.671875 18 1.5 18H12.5C13.3281 18 14 17.2441 14 16.3125V9.56252C14 8.63088 13.3281 7.87502 12.5 7.87502H11V5.37541C11 3.98323 11.9906 2.82659 13.2281 2.81253C14.4781 2.79847 15.5 3.94104 15.5 5.34377V8.15627C15.5 8.62385 15.8344 9.00002 16.25 9.00002H17.25C17.6656 9.00002 18 8.62385 18 8.15627V5.34377C18 2.39066 15.8594 -0.0105122 13.2344 3.46119e-05Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
