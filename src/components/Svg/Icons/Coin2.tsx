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
        d="M27.1243 56.8333C13.5704 56.8333 2.58268 45.2673 2.58268 31C2.58268 16.7326 13.5704 5.16663 27.1243 5.16663C40.6783 5.16663 51.666 16.7326 51.666 31C51.666 45.2673 40.6783 56.8333 27.1243 56.8333Z"
        stroke={theme.colors[color] as string}
        fill="none"
        stroke-width="4"
      />
      <path
        d="M33.583 22.7333C31.9388 21.4 29.8873 20.6706 27.7705 20.6666C22.4204 20.6666 18.083 25.2908 18.083 31C18.083 36.7091 22.4204 41.3333 27.7705 41.3333C29.9508 41.3333 31.9633 40.5635 33.583 39.2666"
        stroke={theme.colors[color] as string}
        fill="none"
        stroke-width="4"
      />
      <path
        d="M25.833 5.16663C37.0266 5.16663 59.4163 7.74996 59.4163 31C59.4163 54.25 37.0266 56.8333 25.833 56.8333"
        fill="none"
        stroke={theme.colors[color] as string}
        stroke-width="4"
      />
    </Svg>
  );
};

export default Icon;
