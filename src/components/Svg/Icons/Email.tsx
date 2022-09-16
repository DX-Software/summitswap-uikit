import React from "react";
import { useTheme } from "styled-components";
import { Colors } from "../../../theme/types";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color ? (props.color as keyof Colors) : "primary";

  return (
    <Svg viewBox="0 0 14 12" fill="none" {...props}>
      <path
        d="M12.332 0.666016H1.66536C0.932031 0.666016 0.338698 1.26602 0.338698 1.99935L0.332031 9.99935C0.332031 10.7327 0.932031 11.3327 1.66536 11.3327H12.332C13.0654 11.3327 13.6654 10.7327 13.6654 9.99935V1.99935C13.6654 1.26602 13.0654 0.666016 12.332 0.666016ZM12.332 3.33268L6.9987 6.66602L1.66536 3.33268V1.99935L6.9987 5.33268L12.332 1.99935V3.33268Z"
        fill={theme.colors[color] as string}
      />
    </Svg>
  );
};

export default Icon;
